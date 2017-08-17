import * as actionTypes from '../actions/actionTypes';

export function setLoggedInStatus(user) {
  return {
    type: actionTypes.USER_LOGGEDIN,
    user,
  };
}

