import React from 'react';
import { View, Text, Button, Image } from 'react-native';
const logoImage = require('../Assets/Images/tree.png')

const LogoTitle = () => {
  return <><Image
    source={logoImage}
    style={{width: 30, height: 30}}
  />
  <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', marginLeft: 5}}>Welcome</Text>
  </>
}

class WelcomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome'
  // }
  static navigationOptions = ({navigation}) => {
    return {
      // title: `Welcom ${navigation.getParam('name', 'You')}`,
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#000"
        />
      ),
      headerStyle: {
        backgroundColor: '#006400',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
  render() {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>{`Welcome ${this.props.navigation.getParam('name', 'You')}`} </Text>
      <Button
        title="Go to welcome again"
        onPress={() => this.props.navigation.push('Welcome')}
      />
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      <Button
        title="Go Back"
        onPress={() => this.props.navigation.goBack()}
      />
    </View>
  }
}

export default WelcomeScreen;
