import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloWrapper } from './apollo/ApolloWrapper';
import { MainNavigator } from './navigation/MainNavigator';

const applicationErrorHandler = (error: Error, stackTrace: string) => {
  if (__DEV__) console.log('Application Handler', { error, stackTrace });
  error.message = `Application Handler: ${error.message}`;
  // TODO: ADD ERROR REPORTING SERVICE
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerContainer}>
      <ErrorBoundary onError={applicationErrorHandler}>
        <SafeAreaProvider>
          <ApolloWrapper>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </ApolloWrapper>
        </SafeAreaProvider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerContainer: {
    flex: 1,
  },
});

export default App;
