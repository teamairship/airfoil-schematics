import React from 'react';
import renderer from 'react-test-renderer';
import { View } from '../View';

it('renders correctly', () => {
  const tree = renderer.create(<View />).toJSON();
  expect(tree).toMatchSnapshot();
});
