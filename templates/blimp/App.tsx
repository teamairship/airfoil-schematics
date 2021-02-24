import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Blimp } from './app/assets/icons/Blimp';
import { globalStyles } from './app/styles/globalStyles';
import { Text } from './app/components/Text/Text';
import { View } from './app/components/View/View';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Blimp containerStyle={styles.icon} />
        <Text>Welcome.</Text>
        <Text>Let's get started.</Text>
      </View>
    </NavigationContainer>
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
