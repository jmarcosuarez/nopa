/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';

test('Renders correctly', () => {
  const wrapper = shallow(
    <Button>Send</Button>,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});