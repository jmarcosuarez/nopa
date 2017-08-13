import React from 'react';

const TextInput = props => (
  <div className="form-input">
    <label
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      placeholder={props.label}
      onChange={props.handleChange}
      data-error={props.errors}
    />
    <div className="errors">{props.errors}</div>
  </div>
  );

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.string,
};

TextInput.defaultProps = {
  errors: "",
};


export default TextInput;
