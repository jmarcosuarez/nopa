import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Button.css';

const Button = props => (
  <div className="">
    <Link {...props} className={styles.button}>
      {props.children}
    </Link>
  </div>
  );

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
