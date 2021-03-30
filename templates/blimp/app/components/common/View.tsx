import React, { FC, ReactNode } from 'react';
import { StyleProp, StyleSheet, View as RNView, ViewStyle, ViewProps } from 'react-native';

type Props = ViewProps & {
  children?: ReactNode;
  row?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const View: FC<Props> = ({ row, style, ...restProps }) => {
  return <RNView style={[style, row ? styles.row : null]} {...restProps} />;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
