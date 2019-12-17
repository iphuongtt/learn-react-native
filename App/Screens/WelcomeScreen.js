import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = (props) => {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 30}}>This is welcome screen </Text>
    <Button
      title="Go to welcome again"
      onPress={() => props.navigation.push('Welcome')}
    />
    <Button
      title="Go to Home"
      onPress={() => props.navigation.navigate('Home')}
    />
    <Button
      title="Go Back"
      onPress={() => props.navigation.goBack()}
    />
  </View>
}

export default WelcomeScreen;
