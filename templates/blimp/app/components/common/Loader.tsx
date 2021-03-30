import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View } from './View';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'center',
  },
});
