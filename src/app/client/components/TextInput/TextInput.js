/* eslint-disable no-confusing-arrow */
import React from 'react';
import { compose, head } from 'ramda';
import { isValid } from '../../containers/Login/Revalidation';

const createErrorMessage = 
  errorMsgs => isValid(errorMsgs) ? null : <div className="error">{head(errorMsgs)}</div>;

const TextInput = props => (
  <div className="form-input">
    <label
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.handleChange}
    />
    <div className="errors">{ createErrorMessage(props.errors) }</div>
  </div>
  );

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.array,
};

TextInput.defaultProps = {
  errors: [],
};


export default TextInput;
