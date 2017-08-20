/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, head } from 'ramda';
import { isValid } from '../../containers/Login/Revalidation';
import styles from './TextInput.css';

const createErrorMessage = 
  errorMsgs => isValid(errorMsgs) ? null : <div className={styles.error}>{head(errorMsgs)}</div>;

const TextInput = props => (
  <div className={styles.formInput}>
    <label className="text-left" htmlFor={props.name}>{props.name}</label>
    <input
      id={props.name}
      name={props.name}
      type="text"
      className={isValid(props.errors) ? '' : 'error'}
      value={props.value}
      onChange={props.onChange}
    />
    <div className={styles.errorPlaceholder}>{ createErrorMessage(props.errors) }</div>
  </div>
  );

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
};

TextInput.defaultProps = {
  errors: [],
};


export default TextInput;
