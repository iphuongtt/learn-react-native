import React, {useState, useMemo} from 'react';
import {
  Animated,
  View,
  Text,
  PanResponder,
  StyleSheet,
  Dimensions,
} from 'react-native';

const AnimatedCliff = () => {
  const [animation] = useState(new Animated.ValueXY());
  const panResponder = useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: animation.x,
          dy: animation.y,
        },
      ]),
    });
  }, [animation]);

  const {height} = Dimensions.get('window');

  const inputRange = [0, height / 2 - 50.01, height / 2 - 50, height];
  // const inputRange =[0, (height / 2) - 50.01, (height / 2), height];
  const backgroundColorInterpolate = animation.y.interpolate({
    inputRange,
    outputRange: [
      'rgb(99,71,255)',
      'rgb(99,71,255)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
    ],
  });

  const flipInterpolate = animation.y.interpolate({
    inputRange,
    outputRange: [1, 1, -1, -1],
  });

  const animatedStyles = {
    backgroundColor: backgroundColorInterpolate,
    transform: [...animation.getTranslateTransform(), {scale: flipInterpolate}],
  };

  return (
    <View style={styles.container}>
      <View style={[styles.top, styles.center, styles.container]}>
        <Text>Good</Text>
      </View>
      <View style={[styles.center, styles.container]}>
        <Text>Bad</Text>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, styles.center, animatedStyles]}>
        <Text>Box</Text>
      </Animated.View>
    </View>
  );
};

AnimatedCliff.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 0,
    left: 0,
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#AAA',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedCliff;
