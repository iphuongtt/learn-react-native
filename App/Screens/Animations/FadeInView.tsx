/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Animated, View, Text} from 'react-native';

const FadeInView = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // initial value for opacity

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  }, [fadeAnim]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          width: 250,
          height: 50,
          backgroundColor: 'blue',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Fading in
        </Text>
      </Animated.View>
    </View>
  );
};

FadeInView.navigationOptions = {
  title: 'Fading',
  headerStyle: {
    backgroundColor: 'red',
  },
  headerTintColor: 'white',
};

export default FadeInView;
