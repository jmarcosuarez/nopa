/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import BankListItem from './BankListItem';

describe('Renders correctly', () => {
  it('should render correctly', () => {
    const output = shallow(
      <BankListItem alt="Santander" src="./" onSelectBank={() => {}} />,
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should handle the click event', () => {
    const alt = "Santander";
    const fc = jest.fn();
    const output = shallow(
      <BankListItem alt="Santander" src="./" onSelectBank={fc} />,
    );
    output.simulate('click', { target: { alt } });
    expect(fc).toHaveBeenCalledWith(alt);
  });
});
