/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from './Header';

test('Renders correctly', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  // Initialize mockstore with empty state
  const initialState = {
    user: 
    {
      surname: 'Denis', 
      sortCode: '23-43-54',
      accountNumber: '09434534343434',
      passCode: '0943',
      memorableWord: 'Qwteyruy',
      loggedIn: false,
    },
  };
  const store = mockStore(initialState);
  const fc = jest.fn();
  const output = shallow(
    <Header store={store} onLogoutUser={fc} onLogInUser={fc} />,
  );
  expect(toJson(output)).toMatchSnapshot();
});
