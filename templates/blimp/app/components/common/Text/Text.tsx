import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextProps, TextStyle } from 'react-native';
import { colors, globalStyles, LINE_HEIGHT_MULTIPLIER } from '../../styles/globalStyles';

type Props = TextProps & {
  bold?: boolean;
  color?: string;
  fontSize?: number;
  italic?: boolean;
  style?: StyleProp<TextStyle>;
};

export const Text: FC<Props> = ({ bold, color, children, fontSize, italic, style }) => {
  return (
    <RNText
      allowFontScaling={false}
      style={[
        styles.standardText,
        fontSize ? { fontSize, lineHeight: fontSize * LINE_HEIGHT_MULTIPLIER } : null,
        italic ? styles.italic : null,
        bold ? styles.bold : null,
        color ? { color } : null,
        style ? style : null,
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  standardText: {
    ...globalStyles.standardText,
    color: colors.black,
  },
});
