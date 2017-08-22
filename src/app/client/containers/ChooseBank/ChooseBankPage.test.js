/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ChooseBankPage from './ChooseBankPage';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ChooseBankPage />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
