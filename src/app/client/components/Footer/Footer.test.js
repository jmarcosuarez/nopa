/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from './Footer';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Footer />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
