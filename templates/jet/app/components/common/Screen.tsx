import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

interface Props {
  barStyle?: 'dark-content' | 'light-content';
}

const Screen: React.FC<Props> = ({ barStyle = 'dark-content', children }) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};

export default Screen;
