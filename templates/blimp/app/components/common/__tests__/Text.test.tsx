import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../Text';

it('renders correctly', () => {
  const tree = renderer.create(<Text>Hello World!</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
