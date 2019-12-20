import React from 'react';
import {
  Picker,
  Icon
} from 'native-base';

const FormDropDown = props => {
  return (
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      style={{ width: undefined, marginLeft: 20, marginRight: 20 }}
      placeholder="Select your SIM"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      // selectedValue={this.state.selected2}
      // onValueChange={this.onValueChange2.bind(this)}
    >
      <Picker.Item label="Wallet" value="key0" />
      <Picker.Item label="ATM Card" value="key1" />
      <Picker.Item label="Debit Card" value="key2" />
      <Picker.Item label="Credit Card" value="key3" />
      <Picker.Item label="Net Banking" value="key4" />
    </Picker>
  );
}

export default FormDropDown;
