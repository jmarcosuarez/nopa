/* eslint-disable no-shadow */
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { assoc, assocPath, identity, is, map, merge, prop } from 'ramda';
import isValid from './isValid';

// Helper function
const getValueName = (e) => {
  const target = e.target;
  const name = target.name;
  const value = target.type === 'checkbox'
    ? target.checked
    : target.value;

  return { name, value };
};

const revalidation = ({
  validate,
  mapPropsToState = identity,
  mapSetStateToProps = (updateState, actions) => ({
    onChange: (e) => {
      const { name, value } = getValueName(e);
      return updateState(actions.update(name, value));
    },
    updateAndValidate: (e) => {
      const { name, value } = getValueName(e);
      return updateState(actions.updateAndValidate(name, value));
    }, 
    validate: (e) => {
      const { name, value } = getValueName(e);
      return updateState(actions.validate(name, value));
    },
    onSubmit: onsSubmitFn => updateState(actions.validateAll(onsSubmitFn)),
  }),
  actions = {
    update: (name, value, state) => [assocPath(['values', name], value, state)],
    validate: (name, value, state, { validate }) => [assoc('errors', validate.input(name, value), state)],
    updateAndValidate: (name, value, state) => {
      const nextState = assocPath(['values', name], value, state);
      return [assoc('errors', validate.input(name, value), nextState)];
    },
    validateAll: (cbFn, state, { validate }) => [
      assoc('errors', validate.all(state.values), state),
      (state) => {
        if (isValid(state.errors)) {
          cbFn(state.values);
        }
      },
    ],
  },
}) => (Component) => {
  class HigherOrderFormComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { errors: {}, values: mapPropsToState(prop('values', props)) };
      this.actions = map(f => (...args) => f(...args, this.state, { ...this.props, validate }), actions);
      this.updateState = this.updateState.bind(this);
    }

    updateState(setState) {
      const [setStateFn, effects = () => {}] = setState;
      this.setState(setStateFn, () => effects(this.state));
    }

    render() {
      const { values, errors } = this.state;
      const dispatched = mapSetStateToProps(this.updateState, this.actions);
      return React.createElement(Component, {
        ...this.props,
        ...dispatched,
        form: values,
        errors,
      });
    }
  }

  HigherOrderFormComponent.displayName = `Revalidation_(${Component.displayName || Component.name || 'Component'})`;
  return hoistNonReactStatics(HigherOrderFormComponent, Component);
};

export default revalidation;

export {
  isValid,
};
