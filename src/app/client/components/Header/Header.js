import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as actions from '../../redux/actions';

import Button from '../Button/Button';
import * as Paths from '../../constants/paths';
import styles from './Header.css';

const Header = ({ loggedIn, onLogoutUser, onLogInUser }) => {
  const navButtons = loggedIn ? (
    <div className="btn-toolbar">
      <Link to={Paths.HOME} className="btn btn-primary" onClick={onLogoutUser}>Logout</Link>
    </div>
  ) : (
    <div className="btn-toolbar">
      <Link to={Paths.LOGIN_BANK} className="btn btn-primary">Login</Link>
    </div>
  );

  return (
    <div className={styles.header}>
      <div className={styles.logo} />
      <div className={styles.signin}>
        { navButtons }
      </div>
    </div>
  );
};
  
Header.propTypes = {
  loggedIn: PropTypes.bool,
  onLogoutUser: PropTypes.func.isRequired,
  onLogInUser: PropTypes.func.isRequired,
};

Header.defaultProps = {
  loggedIn: false,
};

function mapStateToProps(state) {
  const { loggedIn } = state.user;
  return {
    loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogoutUser: bindActionCreators(actions.logoutUser, dispatch),
    onLogInUser: bindActionCreators(actions.logInUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
