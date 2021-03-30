import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigator } from './navigation/MainNavigator';
import { globalStyles } from './styles/globalStyles';

declare const global: { HermesInternal: null | {} };

const applicationErrorHandler = (error: Error, stackTrace: string) => {
  if (__DEV__) console.log('Application Handler', { error, stackTrace });
  error.message = `Application Handler: ${error.message}`;
  // TODO: ADD ERROR REPORTING SERVICE
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ErrorBoundary onError={applicationErrorHandler}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: globalStyles.standardPadding * 2,
  },
});

export default App;
