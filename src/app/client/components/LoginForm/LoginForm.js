import React from 'react';
import enhancedForm from './enhancedForm';
import { TextInput } from '../';

const LoginForm = ({ state, handleChange, handleSubmit, errors = {} }) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      name="surname"
      label="Surname"
      value={state.surname}
      handleChange={handleChange}
      errors={errors.surname}
    />
    <TextInput
      name="sortCode"
      label="Sort code"
      value={state.sortCode}
      handleChange={handleChange}
      errors={errors.sortCode}
    />
    <TextInput
      name="accountNumber"
      label="Account number"
      value={state.accountNumber}
      handleChange={handleChange}
      errors={errors.accountNumber}
    />
    <TextInput
      name="passCode"
      label="PassCode"
      value={state.passCode}
      handleChange={handleChange}
      errors={errors.passCode}
      password
    />
    <TextInput
      name="memorableWord"
      label="Memorable word"
      value={state.memorableWord}
      handleChange={handleChange}
      errors={errors.memorableWord}
    />
    <input className="button" type="submit" value="Login &amp; connect" />
  </form>
  );

LoginForm.propTypes = {
  state: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.element.isRequired,

};

export default enhancedForm(LoginForm);
