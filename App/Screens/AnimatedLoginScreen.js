import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const bg = require('../Assets/Images/bg.jpg');
const { Value, event, block, eq, set, cond } = Animated;
let buttonOpacity = new Value(1)
const AnimatedLoginScreen = props => {
  // const [buttonOpacity, setButtonOpacity] = useState(new Value(1))
  // console.log(buttonOpacity)
  
  const onStateChange = event([
    {
      nativeEvent: ({state}) => {
        console.log(state)
        return block([cond(eq(state, State.BEGAN), console.log('bbb'), console.log('aaa'))])
      }
        //block([cond(eq(state, State.END)), set(buttonOpacity, 0)])
        
    }
  ])
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
      <View style={{...StyleSheet.absoluteFill}}>
        <Image
          source={bg}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ height: height/3, justifyContent: 'center' }}>
        <TapGestureHandler onHandlerStateChange={onStateChange}>
          <Animated.View style={{ ...styles.button, opacity: buttonOpacity }}>
            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>SIGN IN</Text>
          </Animated.View>
        </TapGestureHandler>
        <View style={{...styles.button, backgroundColor: '#164b38' }}>
          <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'white' }}>SIGN UP</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 25,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
})

export default AnimatedLoginScreen;
