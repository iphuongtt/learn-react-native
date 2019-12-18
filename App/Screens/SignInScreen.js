import React, { useState, useCallBack, Fragment } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import FormButton from '../Components/FormButton';
import FormInput from '../Components/FormInput';
import ErrorMessage from '../Components/ErrorMessage';

const iconPrefix = Platform.OS === 'ios' ? 'ios-' : 'md-';

const SignInScreen = (props) => {
  const [rightIcon, setRightIcon] = useState(`${iconPrefix}eye-off`);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const { navigation } = props;
  //const gotoSignup = useCallBack(() => {navigation.navigate('App')}, []);
  const gotoSignup = () => {navigation.navigate('App')};
  const _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    console.log('test')
    navigation.navigate('App');
  }

  const handlePasswordVisibility = () => {
    setRightIcon(v => v === `${iconPrefix}eye` ? `${iconPrefix}eye-off` : `${iconPrefix}eye`)
    setPasswordVisibility(v => !v)
  }

  return (
    <SafeAreaView>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={_signInAsync}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required('Please enter a registered email'),
          password: yup
            .string()
            .min(6)
            .required()
        })}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          isValid,
          isSubmitting,
          handleBlur,
          touched
        }) => (
          <Fragment>
            <FormInput
              name="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Enter email"
              autoCapitalize="none"
              iconName="md-mail"
              iconColor="#2C384A"
            />
            <ErrorMessage errorValue={touched.email && errors.email} />

            <FormInput
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Enter password"
              autoCapitalize="none"
              iconName="md-lock"
              iconColor="#2C384A"
              secureTextEntry={!passwordVisibility}
              rightIcon={
                <TouchableOpacity onPress={handlePasswordVisibility}>
                  <Ionicons name={rightIcon} size={28} color='grey' />
                </TouchableOpacity>
              }
            />
            <ErrorMessage errorValue={touched.password && errors.password} />

            <View>
              <FormButton
                buttonType="outline"
                onPress={handleSubmit}
                title="LOGIN"
                buttonColor="#039BE5"
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
              />
            </View>
          </Fragment>
        )}
      </Formik>
      <Button
        title="Don't have an account? Sign Up"
        onPress={gotoSignup}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />
    </SafeAreaView>
  )
}

export default SignInScreen;
