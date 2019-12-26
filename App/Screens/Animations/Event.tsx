import React, {useState} from 'react';
import {Animated, View, ScrollView} from 'react-native';

const AnimatedEvent = () => {
  const [animation] = useState(new Animated.Value(0));
  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });
  return (
    <View style={{flex: 1}}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: animation,
              },
            },
          },
        ])}>
        <Animated.View
          style={{
            height: 3000,
            backgroundColor: backgroundInterpolate,
          }}></Animated.View>
      </ScrollView>
    </View>
  );
};

AnimatedEvent.navigationOptions = {
  header: null,
};

export default AnimatedEvent;
