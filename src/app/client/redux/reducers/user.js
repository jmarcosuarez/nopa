import * as actionTypes from '../actions/actionTypes';

const initialState = {
};

function setUserStatus(state, action) {
  const { user } = action;
  return { ...state, user };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGGEDIN:
      return setUserStatus(state, action);
    default:
      return state;
  }
}
