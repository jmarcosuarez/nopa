/* eslint-disable no-undef */
import * as actions from '../../actions';
import * as actionTypes from '../../actions/actionTypes';

const user = 
  {
    surname: 'Denis', 
    sortCode: '23-43-54',
    accountNumber: '09434534343434',
    passCode: '0943',
    memorableWord: 'Qwteyruy',
  };

describe('UserActions', () => {
  it('should create the action to save user', () => {
    const save = actions.saveUser(user);
    const expectedAction = {
      user,
      type: actionTypes.USER_LOGIN,
    };
    expect(save).toEqual(expectedAction);
  });
  it('should create the action to logout user', () => {
    const logoutUser = actions.logoutUser();
    const expectedAction = {
      type: actionTypes.USER_LOGOUT,
    };
    expect(logoutUser).toEqual(expectedAction);
  });
});
