import React from 'react'
import Svg, { Path } from 'react-native-svg';

const StarFilledIcon = props => (
    <Svg width={24} height={24} {...props}>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        <Path d="M0 0h24v24H0z" fill="none" />
    </Svg>
);

export default StarFilledIcon;
