import React, { ForwardRefExoticComponent } from 'react';
import { StyleProp, StyleSheet, View as RNView, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  row?: boolean;
  marginTop?: number;
  marginBottom?: number;
  style?: StyleProp<ViewStyle>;
  flex?: number;
}

export const View: React.FC<Props> & ForwardRefExoticComponent<any> = React.forwardRef(
  ({ row, style, flex, marginTop, marginBottom, ...props }, ref: any) => (
    <RNView
      style={[
        marginTop ? { marginTop } : null,
        marginBottom ? { marginBottom } : null,
        flex ? { flex } : null,
        row ? styles.row : null,
        style,
      ]}
      {...props}
      ref={ref}
    />
  ),
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
