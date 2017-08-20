import React from 'react';
import PropTypes from 'prop-types';
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
        onChange={updateAndValidate}
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
        onChange={updateAndValidate}
        errors={errors.memorableWord}
      />
      <button className={styles.btn} onClick={() => onSubmit(submitCb)}>Submit
    </button>
    </div>
  );

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  updateAndValidate: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  valid: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitCb: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

LoginForm.defaultProps = {
  errors: {},
  valid: () => {},
};

export default LoginForm;
