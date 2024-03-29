import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { Colors } from '../../styles/globalStyles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
};

export const Blimp: FC<Props> = ({ containerStyle, color = Colors.orange, size = 50 }) => {
  return (
    <View style={containerStyle}>
      <Svg viewBox="0 0 100 100" width={size} height={size}>
        <G transform="matrix(4.166666666666667,0,0,4.166666666666667,0,0)">
          <Path
            d="M8.25.5a4.5,4.5,0,0,0,0,9h10.5a4.5,4.5,0,0,0,0-9Z"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M3.75,5a4.483,4.483,0,0,1,.322-1.671L1.779,2.411a.751.751,0,0,0-1.029.7V6.892a.751.751,0,0,0,1.029.7l2.293-.918A4.483,4.483,0,0,1,3.75,5Z"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M9.75,9.5h6a0,0,0,0,1,0,0v2a1,1,0,0,1-1,1h-4a1,1,0,0,1-1-1v-2A0,0,0,0,1,9.75,9.5Z"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M22.316,23a.934.934,0,0,0,.752-1.488,5.678,5.678,0,0,0-4.5-2.262,7.587,7.587,0,0,0-3.178.7A7.5,7.5,0,0,0,.793,21.432,1.417,1.417,0,0,0,2.2,23Z"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M22.994 3.5L20.25 3.5"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M4.006 3.5L8.25 3.5"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M17.25 3.5L15.75 3.5"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <Path
            d="M12.75 3.5L11.25 3.5"
            fill="none"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </G>
      </Svg>
    </View>
  );
};
