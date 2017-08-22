/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomePage from './HomePage';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <HomePage />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
