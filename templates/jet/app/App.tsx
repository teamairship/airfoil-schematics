import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ApolloWrapper from './apollo/ApolloWrapper';
import MainNavigator from './navigation/MainNavigator';

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
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </ApolloWrapper>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
