/* eslint-disable no-undef */
import userReducer from '../user';
import * as actionTypes from '../../actions/actionTypes';

const state = {};
const user = 
  {
    surname: 'Denis', 
    sortCode: '23-43-54',
    accountNumber: '09434534343434',
    passCode: '0943',
    memorableWord: 'Qwteyruy',
    loggedIn: true,
  };

const loggedOutUser = { loggedIn: false };

describe('REDUCER -> UserReducer', () => {
  it('reducer for USER_LOGIN', () => {
    const newState = userReducer(state, 
      { type: actionTypes.USER_LOGIN, user });
    expect(newState).toEqual(user);
  });
  it('reducer for USER_LOGOUT', () => {
    const newState = userReducer(state, 
      { type: actionTypes.USER_LOGOUT, user });
    expect(newState).toEqual(loggedOutUser);
  });
});
