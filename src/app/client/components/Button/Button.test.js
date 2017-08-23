/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Button>Send</Button>,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
