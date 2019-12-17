import React from 'react';
import { View, Text } from 'react-native';

class TabWelcome extends React.Component {
  render() {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is Welcome tab</Text>
    </View>
  }
}

export default TabWelcome;
