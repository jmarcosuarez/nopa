/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from './TextInput';

test('should render correctly', () => {
  const fc = jest.fn();
  const object = {
    surname: 'Denis', 
    sortCode: '23-43-54',
    accountNumber: '09434534343434',
    passCode: '0943',
    memorableWord: 'Qwteyruy',
  };
  const wrapper = shallow(
    <TextInput
      name={object.surname}
      value={object.surname}
      onChange={fc} onErrors={fc}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
