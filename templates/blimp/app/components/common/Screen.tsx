import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  barStyle?: 'dark-content' | 'light-content';
}

export const Screen: React.FC<Props> = ({ barStyle = 'dark-content', children }) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};
