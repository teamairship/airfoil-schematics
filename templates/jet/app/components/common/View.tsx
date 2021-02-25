import React, { ForwardRefExoticComponent } from 'react';
import { View as RNView, ViewProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  row?: boolean;
  marginTop?: number;
  marginBottom?: number;
  style?: StyleProp<ViewStyle>;
}

const View: React.FC<Props> &
  ForwardRefExoticComponent<any> = React.forwardRef(
  ({ row, style, marginTop, marginBottom, ...props }, ref: any) => (
    <RNView
      style={[
        marginTop ? { marginTop } : null,
        marginBottom ? { marginBottom } : null,
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

export default View;
