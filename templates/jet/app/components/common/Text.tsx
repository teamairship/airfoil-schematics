import React from 'react';
import { TextProps, TextStyle, StyleSheet, StyleProp } from 'react-native';
import { Text as ElementsText } from 'react-native-elements';

import { Color, colors, globalStyles, LINE_HEIGHT_MULTIPLIER } from '../../styles/globalStyles';

interface Props extends TextProps {
  color?: Color | string;
  bold?: boolean;
  italic?: boolean;
  marginBottom?: number;
  fontSize?: number | null;
  selectable?: boolean;
  style?: StyleProp<TextStyle>;
  testID?: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const Text: React.FC<Props> = ({
  style,
  bold,
  color,
  italic,
  fontSize,
  numberOfLines,
  ellipsizeMode,
  children,
  testID,
}) => {
  return (
    <ElementsText
      style={[
        styles.standardText,
        fontSize ? { fontSize, lineHeight: fontSize * LINE_HEIGHT_MULTIPLIER } : null,
        italic ? styles.italic : null,
        bold ? styles.bold : null,
        color ? { color } : null,
        style,
      ]}
      testID={testID || ''}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </ElementsText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '800',
  },
  italic: {
    fontStyle: 'italic',
  },
  standardText: {
    ...globalStyles.standardText,
    color: colors.black,
  },
});
