/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from './Layout';

test('should render correctly', () => {
  const Header = {};
  const wrapper = shallow(
    <Layout>
      Header
    </Layout>,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
