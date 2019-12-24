import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

type Props = {
  style: object;
  children: any;
};

const FadeInView = (props: Props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  // initial value for opacity

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    });
  }, [fadeAnim]);

  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
