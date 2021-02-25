import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from 'react-native-error-boundary';

import ApolloWrapper from './apollo/ApolloWrapper';
import MainNavigator from './navigation/MainNavigator';
import NavigationWrapper from './navigation/NavigationWrapper';

const applicationErrorHandler = (error: Error, stackTrace: string) => {
  if (__DEV__) console.log('Application Handler', { error, stackTrace });
  error.message = `Application Handler: ${error.message}`;
  // TODO: ADD ERROR REPORTING SERVICE
};

const App = () => {
  return (
    <ErrorBoundary onError={applicationErrorHandler}>
      <SafeAreaProvider>
        <ApolloWrapper>
          <NavigationWrapper>
            <MainNavigator />
          </NavigationWrapper>
        </ApolloWrapper>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
