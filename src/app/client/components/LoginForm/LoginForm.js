import React from 'react';
import enhancedForm from './enhancedForm';
import { TextInput } from '../';

const LoginForm = ({ form, handleChange, handleSubmit, errors = {} }) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      name="surname"
      label="Surname"
      value={form.surname}
      handleChange={handleChange}
      errors={errors.surname}
    />
    <TextInput
      name="sortCode"
      label="Sort code"
      value={form.sort}
      handleChange={handleChange}
      errors={errors.sortCode}
    />
    <TextInput
      name="accountNumber"
      label="Account number"
      value={form.name}
      handleChange={handleChange}
      errors={errors.accountNumber}
    />
    <TextInput
      name="passCode"
      label="PassCode"
      value={form.passCode}
      handleChange={handleChange}
      errors={errors.passCode}
      password
    />
    <TextInput
      name="memorableWord"
      label="Memorable word"
      value={form.memorableWord}
      handleChange={handleChange}
      errors={errors.memorableWord}
    />
    <input className="button" type="submit" value="Login &amp; connect" />
  </form>
  );

LoginForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.element.isRequired,

};

export default enhancedForm(LoginForm);
