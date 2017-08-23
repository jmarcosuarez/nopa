/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BankListItem from './BankListItem';

test('Renders correctly', () => {
  const Header = {};
  const alt = "Santander";
  const fc = jest.fn();
  const wrapper = shallow(
    <BankListItem alt={alt} src="./" onSelectBank={fc} />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle the click event', () => {
  const alt = "Santander";
  const fc = jest.fn();
  const output = shallow(
    <BankListItem alt="Santander" src="./" onSelectBank={fc} />,
  );
  output.simulate('click', { target: { alt } });
  expect(fc).toHaveBeenCalledWith(alt);
});
