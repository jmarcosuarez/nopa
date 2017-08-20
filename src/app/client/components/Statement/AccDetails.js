import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.css';

const AccDetails = props =>
  <div className={styles.AccDetails}>
    <h1>{props.choosenBank}</h1>
    <h1>{props.surname}</h1>
    <h2>Current Account: {props.account}</h2>
  </div>;

AccDetails.propTypes = {
  // onFetchTransactions: PropTypes.func.isRequired,
  choosenBank: PropTypes.string,
  surname: PropTypes.string,
  account: PropTypes.string,
};

AccDetails.defaultProps = {
  choosenBank: '',
  surname: '',
  account: '',
};

export default AccDetails;
