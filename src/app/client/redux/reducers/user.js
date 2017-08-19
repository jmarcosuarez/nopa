import * as actionTypes from '../actions/actionTypes';

const initialState = {
};

function setUser(state, action) {
  const { user } = action;
  const loggedIn = { loggedIn: true };
  return { ...state, ...user, ...loggedIn };
}

function unSetUser(state, action) {
  const loggedIn = { loggedIn: false };
  return { ...state, ...loggedIn };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return setUser(state, action);
    case actionTypes.USER_LOGOUT:
      return unSetUser(state, action);
    default:
      return state;
  }
}
