import React from 'react';
import { StyleSheet } from 'react-native';
import { AnimatedMove } from '@airship/rn-components';

import View from '../components/common/View';
import Text from '../components/common/Text';
import Screen from '../components/common/Screen';
import JetIcon from '../assets/JetIcon';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AnimatedMove startY={-15}>
          <JetIcon containerStyle={styles.icon} />
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

export default HomeScreen;
