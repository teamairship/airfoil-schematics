import React from 'react';
import renderer from 'react-test-renderer';
import { Screen } from '../Screen';
import { Text } from '../Text';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Screen>
        <Text>Hello World!</Text>
      </Screen>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
