import React from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, View, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const iconPrefix = Platform.IO === 'ios' ? 'ios-' : 'md-';

const FormCheckBox = ({
  name,
  value,
  title,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <CheckBox
        {...rest}
        title={title}
        iconType="ionicon"
        checkedIcon={`${iconPrefix}checkbox-outline`}
        uncheckedIcon={`${iconPrefix}square-outline`}
        checkedColor='#008000'
        name={name}
        checked={value}
        style={styles.checkbox}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15
  },
  iconStyle: {
    marginRight: 10
  },
  checkbox: {}
});

export default FormCheckBox;
