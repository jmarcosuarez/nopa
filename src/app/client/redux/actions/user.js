import { browserHistory } from 'react-router';
import * as actionTypes from '../actions/actionTypes';

function saveUser(user) {
  return {
    type: actionTypes.USER_LOGIN,
    user,
  };
}
/*
 * Called when sending the login form
 * 1. Saves user to redux store
 * 2. Redirect user to /login if not there
 */
export function logInUser(user) {
  return (dispatch, getState) => {
    dispatch(saveUser(user));
    browserHistory.push('/');
  };
}
/*
 * Called when loging out the user from main nav
 * 1. Sets logedIn var to false
 * 2. Redirect user to / if not there
 */
export function logoutUser() {
  return {
    type: actionTypes.USER_LOGOUT,
  };
}
