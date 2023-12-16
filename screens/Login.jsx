import { ScrollView, TouchableOpacity, Text, View, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Backbtn, Button } from '../component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({

  password: Yup.string()
    .min(8, 'Password must be at least 8 charactors')
    .required('Required'),
  email: Yup.string().email('provide a value email address').required('Required'),
});

const invalidform = () => {
  Alert.alert(
    "Invalid Form",
    "Please provide all required filed",
    [
      {
        text: 'Cancel', onPress: () => { }
      },
      {
        text: 'Continue', onPress: () => { }
      },
      { defaultIndex: 1 }
    ]
  )
}

const Login = ({ navigation }) => {
  const [loader, setloader] = useState(false);
  const [responceData, setResponceData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const login = async (values) => {
    setloader(true)

    try {
      const endpoint = "http://192.168.150.20/api/login"
      const data = values;

      const response = await axios.post(endpoint, data)

      if (response.status === 200) {
        setloader(false);
        setResponceData(response.data)

         await AsyncStorage.setItem(
          `user${responceData._id}`, JSON.stringify(responceData))

         await AsyncStorage.setItem('id', JSON.stringify(responceData._id))

         navigation.replace('BottomNavigation')

      } else {

        Alert.alert(
          "Error Logging in",
          "Please provide valid credentials",
          [
            {
              text: 'Cancel', onPress: () => { }
            },
            {
              text: 'Continue', onPress: () => { }
            },
            { defaultIndex: 1 }
          ]
        )
      }

    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "oops, Error Logging in try again",
        [
          {
            text: 'Cancel', onPress: () => { }
          },
          {
            text: 'Continue', onPress: () => { }
          },
          { defaultIndex: 1 }
        ]
      )
      console.error(error)
    } finally {
      setloader(false)
    }
  }
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ marginHorizontal: 15, }}>
        <View>
          <Backbtn onPress={() => navigation.goBack()} />
          
          <Text style={styles.title}>Save The World From Garbage</Text>
          
          <Image
            source={require('../assets/11.jpg')}
            style={styles.cover} />

          

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values)}>

            {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputwrapper(touched.email ? COLORS.blue : COLORS.green)}>
                    <MaterialCommunityIcons
                      name='email-outline'
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter the Email ID'
                      onFocus={() => { setFieldTouched('email') }}
                      onBlur={() => { setFieldTouched('email', '') }}
                      autoCapitalize='none'
                      value={values.email}
                      onChangeText={handleChange('email')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errormsg}>{errors.email}</Text>
                  )}
                </View>


                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputwrapper(touched.password ? COLORS.blue : COLORS.green)}>
                    <MaterialCommunityIcons
                      name='lock-outline'
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter the Email ID'
                      onFocus={() => { setFieldTouched('password') }}
                      onBlur={() => { setFieldTouched('password', '') }}
                      secureTextEntry={obsecureText}
                      autoCapitalize='none'
                      value={values.password}
                      onChangeText={handleChange('password')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />

                    <TouchableOpacity onPress={() => { setObsecureText(!obsecureText) }}>
                      <MaterialCommunityIcons
                        name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                        size={18} 
                        color={COLORS.green}/>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errormsg}>{errors.password}</Text>
                  )}
                </View>


                <Button title="L O G  I N" onPress={isValid ? handleSubmit : invalidform} isValid={isValid} loader={loader} />

                <Text onPress={() => { navigation.navigate('Signup') }} style={{ textAlign: "center", marginTop: 20,marginBottom:30,color:COLORS.blue }}>Register</Text>
              </View>
            )}

          </Formik>


        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Login

