import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 30}}>This is home screen </Text>
    <Button
      title="Go to Welcome screen"
      onPress={() => props.navigation.navigate('Welcome', {name: 'Neo'})}
    />
  </View>
}

export default HomeScreen;
