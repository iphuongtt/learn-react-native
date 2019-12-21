import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Animated from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
const { event, cond, eq, Value } = Animated;
let opacity;
const AnimationTest = () => {
    const [state] = useState(new Value(-1))
    
    const onStateChange = event([{
        nativeEvent: {
            state: state
        }
    }])

    const opacity = useMemo(() => cond(eq(state, State.END), 0.2, 1), [state])

    return (
        <View style={styles.container}>
            <TapGestureHandler onHandlerStateChange={onStateChange}>
            <Animated.View style={[styles.box, { opacity: opacity }]} />
            </TapGestureHandler>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "tomato",
      width: 200,
      height: 200,
    },
  });

  export default AnimationTest;

