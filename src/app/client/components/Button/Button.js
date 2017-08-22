import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './Button.css';

const Button = props => (
  <div className={styles.buttonWrapper}>
    <Link {...props} className={`btn ${styles.button}`}>
      {props.children}
    </Link>
  </div>
  );

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
