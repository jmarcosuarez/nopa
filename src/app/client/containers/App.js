/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import styles from '../components/Layout/Layout.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        {
          React.Children.map(this.props.children, child => React.cloneElement(
              child,
              { ...this.props },
            ))
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.contextTypes = {
  router: React.PropTypes.object,
};

App.defaultProps = {
};

function mapStateToProps(state) {
  const { loggedIn } = state.user;
  const { choosenBank } = state.bank;
  return {
    loggedIn,
    choosenBank,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onSetLoggedInStatus: bindActionCreators(actions.setLoggedInStatus, dispatch),
    onGetStatedButtonClick: bindActionCreators(actions.getStartedButtonClick, dispatch),
    onLogInUser: bindActionCreators(actions.logInUser, dispatch),
    onLogoutUser: bindActionCreators(actions.logoutUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
