import React, { useState } from 'react';
import {
    View,
    Animated,
    Image,
    Easing
} from 'react-native';

const { Value } = Animated;

const AnimatedBasicScreen = () => {
    const [spinValue] = useState(new Value(0))

}

export default AnimatedBasicScreen;