import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedFade, AnimatedMove } from '@airship/rn-components';
import JetIcon from '../assets/icons/JetIcon';
import { Screen } from '../components/Screen';
import { Text } from '../components/Text';
import { View } from '../components/View';
import { globalStyles } from '../styles/globalStyles';

export const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AnimatedMove startY={-15}>
          <AnimatedFade>
            <JetIcon containerStyle={styles.icon} />
          </AnimatedFade>
        </AnimatedMove>
        <Text>Welcome.</Text>
        <Text>Let's get started.</Text>
      </View>
    </Screen>
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
