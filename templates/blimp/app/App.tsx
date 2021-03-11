import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ErrorBoundary from 'react-native-error-boundary';
import { AnimatedFade, AnimatedMove } from '@airship/rn-components';

import { Blimp } from './assets/icons/Blimp';
import { globalStyles } from './styles/globalStyles';
import { Text } from './components/Text/Text';
import { View } from './components/View/View';

declare const global: { HermesInternal: null | {} };

const applicationErrorHandler = (error: Error, stackTrace: string) => {
  if (__DEV__) console.log('Application Handler', { error, stackTrace });
  error.message = `Application Handler: ${error.message}`;
  // TODO: ADD ERROR REPORTING SERVICE
};

const App = () => {
  return (
    <ErrorBoundary onError={applicationErrorHandler}>
      <NavigationContainer>
        <View style={styles.container}>
          <AnimatedMove startY={-15}>
            <AnimatedFade>
              <Blimp containerStyle={styles.icon} />
            </AnimatedFade>
          </AnimatedMove>
          <Text>Welcome.</Text>
          <Text>Let's get started.</Text>
        </View>
      </NavigationContainer>
    </ErrorBoundary>
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
