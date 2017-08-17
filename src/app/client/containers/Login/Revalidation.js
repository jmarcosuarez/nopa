import React from 'react';
import { assoc, assocPath, identity, is, map, merge, prop } from 'ramda';
import { LoginForm } from '../../components';

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
  mapSetStateToProps = (updateState, actions) => ({
    handleChange: (e) => {
      const { name, value } = getValueName(e);
      return updateState(actions.update(name, value));
    },
  }),
  actions = {
    update: (name, value, state) => [assocPath(['values', name], value, state)],
  },
}) => Component => class HigherOrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
        { values: props.values };
    this.actions = 
        map(f => (...args) => 
          f(...args, this.state), 
          actions,
        );
  }
  updateState = (setState) => {
    const [setStateFn, cb = () => {}] = setState;
    this.setState(setStateFn, () => cb(this.state));
  }
  render() {
    const dispatchers = mapSetStateToProps(this.updateState, this.actions);
    return React.createElement(Component, {
      ...this.props,
      ...dispatchers,
      state: this.state.values,
    });
  }
};

export default revalidation({})(LoginForm);
