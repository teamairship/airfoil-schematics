/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 *
 * Added resolver as a workaround by configuring Metro to understand the .cjs file extension until the following issue is resolved:
 * https://github.com/facebook/metro/issues/535
 * Solution found in Apollo Client 3.5.4 release notices here:
 * https://github.com/apollographql/apollo-client/releases
 */

const { getDefaultConfig } = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    ...defaultResolver,
    sourceExts: [...defaultResolver.sourceExts, 'cjs'],
  },
};
