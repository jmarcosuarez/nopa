/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ErrorPage from './ErrorPage';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ErrorPage route={{ error: '404' }} />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
