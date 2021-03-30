import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedFade, AnimatedMove } from '@airship/rn-components';

import { View } from '../components/common/View';
import { Text } from '../components/common/Text';
import { Screen } from '../components/common/Screen';
import { Blimp } from '../assets/icons/Blimp';
import { globalStyles } from '../styles/globalStyles';

export const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AnimatedMove startY={-15}>
          <AnimatedFade>
            <Blimp containerStyle={styles.icon} />
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
