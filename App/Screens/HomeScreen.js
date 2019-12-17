import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 30}}>This is home screen </Text>
    <Button
      title="Go to Welcome screen"
      onPress={() => props.navigation.navigate('Main_Welcome', {name: 'Neo'})}
    />
    <Button
      title="Toggle drawer navigation"
      onPress={() => props.navigation.toggleDrawer()}
      style={styles.button}
    />
  </View>
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    color: 'red',
  },
})

export default HomeScreen;
