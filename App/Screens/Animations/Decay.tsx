import React, {useState} from 'react';
import {Animated, PanResponder, View} from 'react-native';

const AnimatedDecay = () => {
  const [animation] = useState(new Animated.ValueXY(0));
  let x = 0;
  let y = 0;
  animation.addListener((value: {x: number; y: number}) => {
    x = value.x;
    y = value.y;
  });
  const [panresponder] = useState(
    PanResponder.create({
      onPanResponderGrant: () => {
        animation.setOffset({
          x,
          y,
        });
        animation.setValue({x: 0, y: 0});
      },
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: animation.x,
          dy: animation.y,
        },
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(animation, {
          velocity: {x: vx, y: vy},
          deceleration: 0.997,
        }).start();
      },
    }),
  );
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          transform: animation.getTranslateTransform(),
        }}
        {...panresponder.panHandlers}></Animated.View>
    </View>
  );
};

AnimatedDecay.navigationOptions = {
  header: null,
};

export default AnimatedDecay;
