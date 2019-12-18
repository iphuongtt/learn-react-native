import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SignInScreen = (props) => {
  const _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    props.navigation.navigate('App');
  }
  return (
    <View>
      <Text>This is signin screen</Text>
      <Button
        title="Sign in!"
        onPress={_signInAsync}
      />
    </View>
  )
};

export default SignInScreen;
