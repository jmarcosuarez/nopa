/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AccDetails from './AccDetails';

test('should render correctly', () => {
  const fc = jest.fn();
  const object = {
    surname: 'Denis', 
    choosenBank: 'Santander',
    account: '09434534343434',
  };
  const wrapper = shallow(
    <AccDetails
      surname={object.surname}
      choosenBank={object.choosenBank}
      account={object.account}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
