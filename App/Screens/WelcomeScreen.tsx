import React from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {Text, Button, Image, StatusBar, SafeAreaView} from 'react-native';
const logoImage = require('../Assets/Images/tree.png');

const LogoTitle = () => {
  return (
    <>
      <Image source={logoImage} style={{width: 30, height: 30}} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: '#fff',
          marginLeft: 5,
        }}>
        Welcome
      </Text>
    </>
  );
};

export default class WelcomeScreen extends React.Component<{
  navigation: NavigationStackProp;
}> {
  // static navigationOptions = {
  //   title: 'Welcome'
  // }
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationStackProp;
  }) => {
    return {
      // title: `Welcom ${navigation.getParam('name', 'You')}`,
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          //onPress={() => alert('This is a button!')}
          onPress={() => navigation.navigate('Root_Modal')}
          title="Info"
          color="#000"
        />
      ),
      headerStyle: {backgroundColor: '#006400'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    };
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#006400',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#006400" />
        <Text style={{fontSize: 30}}>
          {`Welcome ${this.props.navigation.getParam('name', 'You')}`}{' '}
        </Text>
        <Button
          title="Go to welcome again"
          onPress={() => this.props.navigation.push('Main_Welcome')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Main_Home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Toggle drawer navigation"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </SafeAreaView>
    );
  }
}
