import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';
import {
  ListItem
} from 'react-native-elements';
import { Container, Item, Input, Icon } from 'native-base';
import * as yup from 'yup';
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import ErrorMessage from '../Components/ErrorMessage';
import FormCheckBox from '../Components/FormCheckBox';
import FormDropDown from '../Components/FormDropDown';
import DropDownModal from '../Components/DropDownModal';

const screenWith = Dimensions.get('window').width;
const logoImg = require('../Assets/Images/logo.png');
const iconPrefix = Platform.IO === 'ios' ? 'ios-' : 'md-';
const initialValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  agree: false,
  city: ''
}
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required('Please enter your email'),
  name: yup
    .string()
    .label('Name')
    .min(10, 'Must have at least 10 characters')
    .required('Please enter your name'),
  password: yup
    .string()
    .label('Password')
    .min(6, 'Password must have more than 6 characters')
    .required('Please enter your password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), 'Confirm password mush matched Password'])
    .required('Confirm Password is required'),
  agree: yup
    .boolean()
    .oneOf([true], 'Please check the agreement'),
  city: yup
    .string()
    .required('City is required')
})

let index = 0;
const data = [
    { key: index++, section: true, label: 'Ha Noi' },
    { key: index++, label: 'Hai Phong' },
    { key: index++, label: 'Hai Duong' },
    { key: index++, label: 'Nam Dinh' },
    { key: index++, label: 'Dong Thap' },
    { key: index++, label: 'Can Tho' },
    { key: index++, section: true, label: 'Tra Vinh' },
    { key: index++, label: 'Soc Trang' },
    { key: index++, label: 'Long An' },
    { key: index++, label: 'Ninh Binh' },
    { key: index++, label: 'Thanh Hoa' },
    { key: index++, label: 'Nghe An' },
    { key: index++, label: 'Lang Son' },
    { key: index++, label: 'Yen Bai' },
    { key: index++, label: 'Hoa Binh' }
];

const SignUpScreen = (props) => {
  const [rightIconPassword, setRightIconPassword] = useState(`${iconPrefix}eye-off`);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIconConfirmPassword, setRightIconConfirmPassword] = useState(`${iconPrefix}eye-off`);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);

  const handleSignUp = () => {
    setTimeout(() => {
      props.navigation.navigate('SignIn');
    }, 1000)
  }

  const handlePasswordVisibility = () => {
    setRightIconPassword(v => v === `${iconPrefix}eye` ? `${iconPrefix}eye-off` : `${iconPrefix}eye`)
    setPasswordVisibility(v => !v)
  }

  const handleConfirmPasswordVisibility = () => {
    setRightIconConfirmPassword(v => v === `${iconPrefix}eye` ? `${iconPrefix}eye-off` : `${iconPrefix}eye`)
    setConfirmPasswordVisibility(v => !v)
  }

  return (
    <ScrollView keyboardDismissMode='on-drag' style={{flex: 1, backgroundColor: 'mintcream'}}>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'mintcream' }}>
        <StatusBar barStyle="light-content" backgroundColor='#d3d3d3'/>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: screenWith/3, height: screenWith/3 * 514 / 640 }}
            source={logoImg}
          />
        </View>
        <View style={{ flex: 5 }}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSignUp}
            validationSchema={validationSchema}
          >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            touched,
            isSubmitting,
            isValid,
            setFieldValue
          }) => (
            <Fragment>
              <FormInput
                name="name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Enter name"
                iconName={`${iconPrefix}person`}
                iconColor="#2C384A"
                errorMessage={touched.name && errors.name}
              />

              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Enter email"
                iconName={`${iconPrefix}mail`}
                iconColor="#2C384A"
                keyboardType="email-address"
                errorMessage={touched.email && errors.email}
              />

              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Enter password"
                iconName={`${iconPrefix}lock`}
                iconColor="#2C384A"
                secureTextEntry={!passwordVisibility}
                rightIcon={
                  <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Ionicons name={rightIconPassword} size={28} color='grey' />
                  </TouchableOpacity>
                }
                errorMessage={touched.password && errors.password}
              />

              <FormInput
                name="confirmPassword"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                placeholder="Enter confirm password"
                iconName={`${iconPrefix}lock`}
                iconColor="#2C384A"
                secureTextEntry={!confirmPasswordVisibility}
                rightIcon={
                  <TouchableOpacity onPress={handleConfirmPasswordVisibility}>
                    <Ionicons name={rightIconConfirmPassword} size={28} color='grey' />
                  </TouchableOpacity>
                }
                errorMessage={touched.confirmPassword && errors.confirmPassword}
              />

              <DropDownModal
                data={data}
                initValue="Select something yummy!"
                cancelText="Close"
                onChange={(city) => setFieldValue('city', city.label)}
              >
                <FormInput
                  name="city"
                  value={values.city}
                  placeholder="Select your city"
                  iconName={`${iconPrefix}home`}
                  iconColor="#2C384A"
                  disabled={true}
                  rightIcon={
                    <Ionicons name={`${iconPrefix}arrow-dropdown`} size={28} color='grey' />
                  }
                  errorMessage={touched.city && errors.city}
                />
              </DropDownModal>

              <FormCheckBox
                title="I'm agree"
                name="agree"
                value={values.agree}
                onPress={() => setFieldValue('agree', !values.agree)}
                containerStyle={{ backgroundColor: 'mintcream', borderWidth: 0, padding: 0, margin: 0 }}
                errorMessage={touched.agree && errors.agree}
              />

              <View style={{ paddingBottom: 30, paddingLeft: 25, paddingRight: 25}}>
                <FormButton
                  title="SIGN UP"
                  buttonType="outline"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                  onPress={handleSubmit}
                />
              </View>
            </Fragment>
          )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default SignUpScreen;
