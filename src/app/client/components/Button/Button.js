import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Button = props => (
  <div className="">
    <Link {...props} className="button">
      {props.children}
    </Link>
  </div>
  );

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Button;
