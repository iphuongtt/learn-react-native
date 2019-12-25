import React, {useState, useEffect} from 'react';
import {Animated, View, Text, Easing, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const DIAMETER = 70;
const MARGIN_TOP = 10;

const Movement = () => {
  const [xPosition1] = useState(new Animated.Value(0));
  const [xPosition2] = useState(new Animated.Value(0));
  const [xPosition3] = useState(new Animated.Value(0));
  const [xPosition4] = useState(new Animated.Value(0));
  const [xPosition5] = useState(new Animated.Value(1));
  const [xPosition6] = useState(new Animated.Value(0));
  const [xPosition7] = useState(new Animated.Value(1));
  const [xPosition8] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.timing(xPosition1, {
      toValue: screenWidth - DIAMETER,
      easing: Easing.back(2),
      duration: 2000,
    }).start();
    Animated.timing(xPosition2, {
      toValue: screenWidth - DIAMETER,
      easing: Easing.bounce, // Like a ball
      duration: 2000,
    }).start();

    Animated.timing(xPosition3, {
      toValue: screenWidth - DIAMETER,
      easing: Easing.elastic(2), // Springy
      duration: 2000,
    }).start();

    Animated.timing(xPosition4, {
      toValue: screenWidth - DIAMETER,
      easing: Easing.sin, // Springy
      duration: 2000,
    }).start();

    Animated.timing(xPosition5, {
      toValue: 3,
      duration: 1000,
      delay: 4000,
      useNativeDriver: true,
    }).start();

    Animated.timing(xPosition6, {
      toValue: screenWidth - DIAMETER,
      easing: Easing.bezier(0.35, 1.56, 1, -0.71), //https://easings.net/en#easeInOutCubic
      duration: 4000,
      delay: 1000,
    }).start();

    Animated.spring(xPosition7, {
      toValue: 2,
      bounciness: 20,
      delay: 2500,
      speed: 20,
      useNativeDriver: true,
    }).start();

    Animated.timing(xPosition8, {
      toValue: 1,
      delay: 5000,
      duration: 3000,
    }).start();
  }, []);
  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition1,
          top: MARGIN_TOP,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          back
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition2,
          top: DIAMETER + MARGIN_TOP * 2,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          bounce
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition3,
          top: DIAMETER * 2 + MARGIN_TOP * 3,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          elastic
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition4,
          top: DIAMETER * 3 + MARGIN_TOP * 4,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          sin
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition6,
          top: DIAMETER * 4 + MARGIN_TOP * 5,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          bezier
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 60 + DIAMETER * 2,
          left: DIAMETER * 2,
          transform: [{scale: xPosition5}],
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          sin
        </Text>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          top: 40,
          left: DIAMETER,
          transform: [{scale: xPosition7}],
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          spring
        </Text>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          left: xPosition8.interpolate({
            inputRange: [0, 0.2, 0.8, 1],
            outputRange: [0, 180, 120, 300],
            // outputRange: [
            //   0,
            //   (screenWidth - DIAMETER) * 0.2,
            //   (screenWidth - DIAMETER) * 0.8,
            //   (screenWidth - DIAMETER) * 1,
            // ],
          }),
          top: DIAMETER * 5 + MARGIN_TOP * 6,
          width: DIAMETER,
          height: DIAMETER,
          backgroundColor: 'brown',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: DIAMETER,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: DIAMETER / 5,
          }}>
          interpolation
        </Text>
      </Animated.View>
    </View>
  );
};

Movement.navigationOptions = {
  header: null,
};
export default Movement;
