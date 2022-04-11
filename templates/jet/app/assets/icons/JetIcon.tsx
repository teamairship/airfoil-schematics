import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';
import { View } from '../../components/View';
import { Colors } from '../../styles/globalStyles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  secondaryColor?: string;
  size?: number;
};

const JetIcon: React.FC<Props> = ({
  containerStyle,
  color = Colors.orange,
  secondaryColor = Colors.black,
  size = 100,
}) => {
  return (
    <View style={containerStyle}>
      <Svg width={size} height={size} viewBox="0 0 140 140">
        <G transform="matrix(1.4,0,0,1.4,0,0)">
          <Path
            d="M60.823,55.7l-2.666,6.221-3.19-2.381.011-.012a8.519,8.519,0,0,0,3.555-4.386l.011-.011Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M65.38,53.418l-3.5,9.011a.52.52,0,0,1-.619.314l-3.1-.829L60.823,55.7Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M95,53.993a1.7,1.7,0,0,1-1.7,1.7h-28.8l.886-2.278H94.425A.574.574,0,0,1,95,53.993Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M62.943,59.684l4.536-1.645a1.106,1.106,0,0,1,.369-.064h9.384a2.021,2.021,0,0,0,1.807-1.117L79.62,55.7H64.494Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M60.794,52.069l9.445-17.421a1.139,1.139,0,1,1,2,1.085l-9.207,17Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
          />
          <Path
            d="M58.157,61.917l-.467,1.1a1.1,1.1,0,0,1-.991.649H43.3a1.1,1.1,0,0,1-.991-.649l-.467-1.1,3.19-2.381h.011a10.186,10.186,0,0,0,9.912,0h.011Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
          />
          <Path
            d="M45.033,59.536l-3.19,2.381L39.177,55.7l2.279-.569.011.011a8.519,8.519,0,0,0,3.555,4.386Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
          />
          <Path
            d="M58.544,52.848v2.279l-.011.011a8.519,8.519,0,0,1-3.555,4.386l-.011.012h-.011a10.186,10.186,0,0,1-9.912,0h-.011l-.011-.012a8.519,8.519,0,0,1-3.555-4.386l-.011-.011V52.848S45.443,56.266,50,56.266,58.544,52.848,58.544,52.848Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M58.544,52.848S54.557,56.266,50,56.266s-8.544-3.418-8.544-3.418L44.3,50.57s1.139,2.278,5.7,2.278,5.7-2.278,5.7-2.278Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M50,44.873c-3.513,0-5.7,5.7-5.7,5.7s1.139,2.278,5.7,2.278,5.7-2.278,5.7-2.278S53.513,44.873,50,44.873Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M44.304 50.57L41.456 52.848 41.456 55.127 39.177 55.696 34.62 53.418 36.967 52.723 39.211 52.074 44.304 50.57z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M34.62,53.418l3.505,9.011a.519.519,0,0,0,.619.314l3.1-.829L39.177,55.7Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M5,53.993a1.7,1.7,0,0,0,1.7,1.7h28.8l-.886-2.278H5.575A.574.574,0,0,0,5,53.993Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M37.057,59.684l-4.536-1.645a1.11,1.11,0,0,0-.369-.064H22.768a2.023,2.023,0,0,1-1.808-1.117L20.38,55.7H35.506Z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
          <Path
            d="M39.206,52.069,29.761,34.648a1.139,1.139,0,1,0-2,1.085l9.207,17Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
          />
          <Path
            d="M51.709 63.671L51.139 65.949 48.861 65.949 48.291 63.671 51.709 63.671z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
          />
          <Path
            d="M65.38 53.418L60.823 55.696 58.544 55.127 58.544 52.848 55.696 50.57 60.789 52.074 63.033 52.723 65.38 53.418z"
            fill="none"
            stroke={secondaryColor}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default JetIcon;
