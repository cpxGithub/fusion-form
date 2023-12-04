import React from 'react';
import { shallow } from 'enzyme';
import FusionDemo from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<FusionDemo />);
  expect(wrapper.find('.fusion-demo').length).toBe(1);
});
