/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

test('should render correctly', () => {
  const fc = jest.fn();
  const object = { 
    bank: {
      choosenBank: "HCBC",
      transactions: [
        { id: 1, dateStr: "Now", beneficary: "PAYPAL ZARA", value: "- £35.98" },
      ],
    },
  };
  const wrapper = shallow(
    <LoginForm
      form={object}
      value="memorableWorld"
      onChange={fc}
      updateAndValidate={fc}
      validate={fc}
      valid={fc}
      onSubmit={fc}
      submitCb={fc}
      errors={object}
    />,
);
  expect(toJson(wrapper)).toMatchSnapshot();
});
