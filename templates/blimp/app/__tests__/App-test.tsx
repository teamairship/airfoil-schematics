/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// see: https://github.com/facebook/jest/issues/6434#issuecomment-525576660
beforeEach(() => {
  jest.useFakeTimers();
});

it('renders correctly', async () => {
  renderer.create(<App />);
});
