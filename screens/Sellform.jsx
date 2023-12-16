

import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import axios from 'axios';
import { Backbtn, Button } from '../component';
import styles from './login.style';
import Carcusel1 from '../component/home/Carcusel1';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  suppiler: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  imageUrl: Yup.string().required('Required'),
  description: Yup.string()
    .min(20, 'Provide a value description ')
    .required('Required'),
  product_location: Yup.string().required('Required'),
});

const invalidForm = () => {
  Alert.alert(
    'Invalid Form',
    'Please provide all required fields',
    [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Continue',
        onPress: () => {},
      },
    ],
    { cancelable: true }
  );
};

const Sellform = ({ navigation }) => {
  const [loader, setLoader] = useState(false);

  const registerUser = async (values) => {
    setLoader(true);

    try {
      const endpoint = 'http://192.168.150.20:3000/api/products';
      
      const data = values;

      const response = await axios.post(endpoint, data);

      if (response.status === 200) {
        navigation.replace('BottomNavigation');
        
      }
    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <Backbtn onPress={() => navigation.goBack()} />
          <TouchableOpacity >
        <View style={styles.headingContainer}>
          <Image style={{ height: 100, width: 100 }} source={require('../assets/2.jpg')} />
          <Text style={{ fontSize: 50, color: "#096B88", fontWeight: "900" }}>eCycLo</Text>
        </View>
    </TouchableOpacity>
          <Carcusel1/>
          <Text style={styles.title}># Earn Money By Wastages #</Text>
        </View>

        <Formik
          initialValues={{
            title: '',
            suppiler: '',
            price: '',
            imageUrl: '',
            description: '',
            product_location: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => registerUser(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
            isValid,
            setFieldTouched,
          }) => (
            <View style={styles.container}>
              <View style={styles.wrapper}>
                  <Text style={styles.label}>Wastage Type - Wastage Name</Text>
                  <View style={styles.inputwrapper(touched.title ? COLORS.blue : COLORS.green)}>
                    <Ionicons
                      name="paw"
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter The Wastage Thing Name'
                      onFocus={() => { setFieldTouched('title') }}
                      onBlur={() => { setFieldTouched('title', '') }}
                      autoCapitalize='none'
                      value={values.title}
                      onChangeText={handleChange('title')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.title && errors.title && (
                    <Text style={styles.errormsg}>{errors.title}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Your Name</Text>
                  <View style={styles.inputwrapper(touched.suppiler ? COLORS.blue : COLORS.green)}>
                    <Ionicons
                      name="man"
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter Your Name'
                      onFocus={() => { setFieldTouched('suppiler') }}
                      onBlur={() => { setFieldTouched('suppiler', '') }}
                      autoCapitalize='none'
                      value={values.suppiler}
                      onChangeText={handleChange('suppiler')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.suppiler && errors.suppiler && (
                    <Text style={styles.errormsg}>{errors.suppiler}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Price</Text>
                  <View style={styles.inputwrapper(touched.price ? COLORS.blue : COLORS.green)}>
                    <Ionicons
                      name="logo-usd"
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter The Price'
                      onFocus={() => { setFieldTouched('price') }}
                      onBlur={() => { setFieldTouched('price', '') }}
                      autoCapitalize='none'
                      value={values.price}
                      onChangeText={handleChange('price')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.price && errors.price && (
                    <Text style={styles.errormsg}>{errors.price}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Image Url</Text>
                  <View style={styles.inputwrapper(touched.imageUrl ? COLORS.blue : COLORS.green)}>
                    <Ionicons
                      name="camera"
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter The Wastage Thing Photo'
                      onFocus={() => { setFieldTouched('imageUrl') }}
                      onBlur={() => { setFieldTouched('imageUrl', '') }}
                      autoCapitalize='none'
                      value={values.imageUrl}
                      onChangeText={handleChange('imageUrl')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.imageUrl && errors.imageUrl && (
                    <Text style={styles.errormsg}>{errors.imageUrl}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Description</Text>
                  <View style={styles.inputwrapper(touched.description ? COLORS.blue : COLORS.green)}>
                    <Ionicons
                      name="albums"
                      size={20}
                      color={COLORS.green}
                      style={styles.iconstyle} />

                    <TextInput
                      placeholder='Enter The Description'
                      onFocus={() => { setFieldTouched('description') }}
                      onBlur={() => { setFieldTouched('description', '') }}
                      autoCapitalize='none'
                      value={values.description}
                      onChangeText={handleChange('description')}
                      autoCorrect={false}
                      style={{ flex: 1 }} />
                  </View>
                  {touched.description && errors.description && (
                    <Text style={styles.errormsg}>{errors.description}</Text>
                  )}
                 </View> 

                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Location</Text>
                    <View style={styles.inputwrapper(touched.product_location ? COLORS.blue : COLORS.green)}>
                      <Ionicons
                        name="logo-xing"
                        size={20}
                        color={COLORS.green}
                        style={styles.iconstyle} />

                      <TextInput
                        placeholder='Enter Your Location'
                        onFocus={() => { setFieldTouched('product_location') }}
                        onBlur={() => { setFieldTouched('product_location', '') }}
                        autoCapitalize='none'
                        value={values.product_location}
                        onChangeText={handleChange('product_location')}
                        autoCorrect={false}
                        style={{ flex: 1 }} />
                    </View>
                    {touched.product_location && errors.product_location && (
                      <Text style={styles.errormsg}>{errors.product_location}</Text>
                    )}
                  </View>




                
                

                  <Button
                title="SELL YOUR WASTAGE"
                onPress={isValid ? handleSubmit : invalidForm}
                isValid={isValid}
                loader={loader}
      
              />



                  

                  
                
              
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sellform;
