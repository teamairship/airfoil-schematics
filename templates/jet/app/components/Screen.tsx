import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  barStyle?: 'dark-content' | 'light-content';
}

export const Screen: React.FC<Props> = ({ barStyle = 'dark-content', children }) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});
