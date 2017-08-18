/* eslint-disable no-confusing-arrow */
import React from 'react';
import { compose, head } from 'ramda';
import { TextInput } from '../';
import { isValid } from '../../containers/Login/Revalidation';

const createErrorMessage = 
  errorMsgs => isValid(errorMsgs) ? null : <div className="error">{head(errorMsgs)}</div>;

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
    <div className="form">
      <div className="formGroup">
        <label>Name</label>
        <input
        name="surname"
        type="text"
        className={isValid(errors.surname) ? '' : 'error'}
        value={form.surname}
        onChange={updateAndValidate}
      />
        <div className="errorPlaceholder">{ createErrorMessage(errors.surname) }</div>
      </div>
      <div className="formGroup">
        <label>Random</label>
        <input
        name="memorableWord"
        type="text"
        className={isValid(errors.memorableWord) ? '' : 'error'}
        onBlur={validate}
        value={form.memorableWord}
        onChange={onChange}
      />
        <div className="errorPlaceholder">{ createErrorMessage(errors.memorableWord) }</div>
      </div>
      <button onClick={() => onSubmit(submitCb)}>Submit
    </button>
    </div>
  );

LoginForm.propTypes = {
  form: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.string.isRequired,
  updateAndValidate: React.PropTypes.string.isRequired,
  validate: React.PropTypes.func.isRequired,
  valid: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  submitCb: React.PropTypes.func.isRequired,
  errors: React.PropTypes.array,
};

LoginForm.defaultProps = {
  errors: [],
};

export default LoginForm;
