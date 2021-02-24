import { Dimensions } from 'react-native';

export const GOLDEN_RATIO = 1.62;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
const STANDARD_FONT_SIZE = 16;
export const LINE_HEIGHT_MULTIPLIER = 1.7;

export const colors = {
  black: '#121212',
  trueBlack: '#000000',
  orange: '#ff2a14',
};

export const globalStyles = {
  standardText: {
    color: colors.black,
    fontSize: STANDARD_FONT_SIZE,
    lineHeight: STANDARD_FONT_SIZE * LINE_HEIGHT_MULTIPLIER,
  },
  standardBorderRadius: 20,
  standardPadding: 8,
  shadow: {
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.13,
    shadowRadius: 6.27,
  },
};
