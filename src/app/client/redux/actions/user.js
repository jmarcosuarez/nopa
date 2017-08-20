import { browserHistory } from 'react-router';
import * as actionTypes from '../actions/actionTypes';
import auth from '../../../utils/auth';
import { fetchTransactions } from './bank';

function saveUser(user) {
  return {
    type: actionTypes.USER_LOGIN,
    user,
  };
}

/*
 * Called when sending the login form
 * Pretends to make auth call to server with fixed success callback returned, then:
 * 1. Saves user to redux store
 * 2. Redirects user to /statement
 * 3. Fetches the data we need for the statement's list
 */
export function logInUser(user) {
  return (dispatch, getState) => {
    auth.login((success, err) => {
      if (success === true) {
        dispatch(saveUser(user));
        dispatch(fetchTransactions());
        browserHistory.push('/statement');
      } else {
        console.log('Auth error: ', err);
      }
    });
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
