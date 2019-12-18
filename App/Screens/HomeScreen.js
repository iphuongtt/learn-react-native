import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = (props) => {

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  }

  return <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#6a51ae'}}>
    <StatusBar barStyle="light-content" backgroundColor='#6a51ae'/>
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
    <Button
      title="Sign out"
      onPress={_signOutAsync}
    />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    color: 'red',
  },
})

export default HomeScreen;
