/* eslint-disable no-confusing-arrow */
import React from 'react';
import { compose, head } from 'ramda';
import { isValid } from '../../containers/Login/Revalidation';
import styles from './TextInput.css';

const createErrorMessage = 
  errorMsgs => isValid(errorMsgs) ? null : <div className={styles.error}>{head(errorMsgs)}</div>;

const TextInput = props => (
  <div className={styles.formInput}>
    <label htmlFor={props.name}>{props.name}</label>
    <input
      id={props.name}
      name={props.name}
      type="text"
      className={isValid(props.errors) ? '' : 'error'}
      value={props.form}
      onChange={props.onChange}
    />
    <div className={styles.errorPlaceholder}>{ createErrorMessage(props.errors) }</div>
  </div>
  );

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  form: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.array,
};

TextInput.defaultProps = {
  errors: [],
};


export default TextInput;
