import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class EnsureLoggedIn extends Component {
  
  componentDidMount() {
    const { currentURL, loggedIn } = this.props;
    if (!loggedIn) {
      // If we are not logged In when visiting protected page, redirect to "/login"
      // currentURL is for future redirection, just trigger event to keep it save.
      browserHistory.replace("/login");
    }
  }

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) {
      return this.props.children;
    }
    return null;
  }
}

EnsureLoggedIn.propTypes = {
  children: PropTypes.element.isRequired,
  loggedIn: PropTypes.bool,
  currentURL: PropTypes.string.isRequired,
};

EnsureLoggedIn.defaultProps = {
  loggedIn: false,
};

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  const { loggedIn } = state.user;
  return {
    loggedIn,
    currentURL: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps)(EnsureLoggedIn);