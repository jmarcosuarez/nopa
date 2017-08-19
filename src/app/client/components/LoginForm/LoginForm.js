import React from 'react';
import { TextInput } from '../';
import { isValid } from '../../containers/Login/Revalidation';
import styles from './LoginForm.css';

const LoginForm = ({
  form,
  onChange,
  updateAndValidate,
  validate,
  valid,
  errors = {},
  onSubmit,
  submitCb,
}) =>
  (
    <div className={styles.form}>
      <TextInput 
        name="surname"
        type="text"
        className={isValid(errors.surname) ? '' : 'error'}
        value={form.surname}
        onChange={onChange}
        errors={errors.surname}
      />
      <TextInput 
        name="sortCode"
        type="text"
        className={isValid(errors.sortCode) ? '' : 'error'}
        value={form.sortCode}
        onChange={onChange}
        errors={errors.sortCode}
      />
      <TextInput 
        name="accountNumber"
        type="text"
        className={isValid(errors.accountNumber) ? '' : 'error'}
        value={form.accountNumber}
        onChange={onChange}
        errors={errors.accountNumber}
      />
      <TextInput 
        name="passCode"
        type="text"
        className={isValid(errors.passCode) ? '' : 'error'}
        value={form.passCode}
        onChange={onChange}
        errors={errors.passCode}
      />
      <TextInput 
        name="memorableWord"
        type="text"
        className={isValid(errors.memorableWord) ? '' : 'error'}
        value={form.memorableWord}
        onChange={onChange}
        errors={errors.memorableWord}
      />
      <button onClick={() => onSubmit(submitCb)}>Submit
    </button>
    </div>
  );

LoginForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  updateAndValidate: React.PropTypes.func.isRequired,
  validate: React.PropTypes.func.isRequired,
  valid: React.PropTypes.func,
  onSubmit: React.PropTypes.func.isRequired,
  submitCb: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
};

LoginForm.defaultProps = {
  errors: {},
  valid: () => {},
};

export default LoginForm;
