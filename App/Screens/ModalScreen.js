import React from 'react';
import { View, Text, Button } from 'react-native';

const ModalScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is modal</Text>
      <Button
        title="Dismiss"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}

export default ModalScreen;
