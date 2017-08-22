/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginPage from './LoginPage';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <LoginPage />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});