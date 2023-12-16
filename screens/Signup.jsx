import { ScrollView, TouchableOpacity, Text, View, Image, TextInput,Alert} from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Backbtn, Button } from '../component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import axios from 'axios';

const validationSchema = Yup.object().shape({

  password: Yup.string()
    .min(8, 'Password must be at least 8 charactors')
    .required('Required'),
  email: Yup.string()
    .email('provide a value email address')
    .required('Required'),
  location: Yup.string()
    .min(3, 'provide a value location ')
    .required('Required'),
  username: Yup.string()
    .min(3, 'provide a value location ')
    .required('Required'),
});

const invalidform = () =>{
  Alert.alert(
    "Invalid Form",
    "Please provide all required filed",
    [
      {
        text:'Cancel',onPress:()=>{}
      },
      {
        text:'Continue',onPress:()=>{}
      },
      {defaultIndex:1}
    ]
  )
}

const Signup = ({navigation}) => {

  const [loader, setloader] = useState(false);
  const [responceData, setResponceData] = useState(null);
  const [obsecureText,setObsecureText] = useState(false);

  const registerUser = async(values)=>{
    setloader(true);

    try {
      const endpoint ="http://192.168.68.20:3000/api/register";
      const data = values;

      const response = await axios.post(endpoint,data);

      if(response.status === 201){
        navigation.replace('Login')
      }
    } catch (error) {
      console.log(error)
    }finally{
      setloader(false)
    }
  }
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
    <SafeAreaView style={{ marginHorizontal: 20, }}>
      <View>
        <Backbtn onPress={() => navigation.goBack()} />

        <Text style={styles.title}>Save The Animals And Birds </Text>

        <Image
          source={require('../assets/12.jpg')}
          style={styles.cover} />

        
        <Formik
          initialValues={{ email: '', password: '',location:'',username:''}}
          validationSchema={validationSchema}
          onSubmit={(values)=>registerUser(values)}>

          {({ handleChange, handleBlur, handleSubmit,touched, values,errors,isValid,setFieldTouched }) => (
             <View>
                 <View style={styles.wrapper}>
                   <Text style={styles.label}>username</Text>
                   <View style={styles.inputwrapper(touched.username ? COLORS.blue : COLORS.green )}>
                     <Ionicons
                     name="person"
                     size={20}
                     color={COLORS.green}
                     style={styles.iconstyle}/>

                     <TextInput
                     placeholder='Enter the username'
                     onFocus={()=>{setFieldTouched('username')}}
                     onBlur={()=>{setFieldTouched('username','')}}
                     autoCapitalize='none'
                     value={values.username}
                     onChangeText={handleChange('username')}
                     autoCorrect={false}
                     style={{flex:1}}/>
                   </View>
                   {touched.username && errors.username && (
                     <Text style={styles.errormsg}>{errors.username}</Text>
                   )}
                </View>
                
                <View style={styles.wrapper}>
                   <Text style={styles.label}>Email</Text>
                   <View style={styles.inputwrapper(touched.email ? COLORS.blue : COLORS.green )}>
                     <MaterialCommunityIcons
                     name='email-outline'
                     size={20}
                     color={COLORS.green}
                     style={styles.iconstyle}/>

                     <TextInput
                     placeholder='Enter the Email ID'
                     onFocus={()=>{setFieldTouched('email')}}
                     onBlur={()=>{setFieldTouched('email','')}}
                     autoCapitalize='none'
                     value={values.email}
                     onChangeText={handleChange('email')}
                     autoCorrect={false}
                     style={{flex:1}}/>
                   </View>
                   {touched.email && errors.email && (
                     <Text style={styles.errormsg}>{errors.email}</Text>
                   )}
                </View>

                <View style={styles.wrapper}>
                   <Text style={styles.label}>Location</Text>
                   <View style={styles.inputwrapper(touched.location ? COLORS.blue : COLORS.green )}>
                     <Ionicons
                     name='location-outline'
                     size={20}
                     color={COLORS.green}
                     style={styles.iconstyle}/>

                     <TextInput
                     placeholder='Enter the location'
                     onFocus={()=>{setFieldTouched('location')}}
                     onBlur={()=>{setFieldTouched('location','')}}
                     autoCapitalize='none'
                     value={values.location}
                     onChangeText={handleChange('location')}
                     autoCorrect={false}
                     style={{flex:1}}/>
                   </View>
                   {touched.location && errors.location && (
                     <Text style={styles.errormsg}>{errors.location}</Text>
                   )}
                </View>
                

                <View style={styles.wrapper}>
                   <Text style={styles.label}>Password</Text>
                   <View style={styles.inputwrapper(touched.password ? COLORS.blue : COLORS.green )}>
                     <MaterialCommunityIcons
                     name='lock-outline'
                     size={20}
                     color={COLORS.green}
                     style={styles.iconstyle}/>

                     <TextInput
                     placeholder='Enter the password'
                     onFocus={()=>{setFieldTouched('password')}}
                     onBlur={()=>{setFieldTouched('password','')}}
                     secureTextEntry={obsecureText}
                     autoCapitalize='none'
                     value={values.password}
                     onChangeText={handleChange('password')}
                     autoCorrect={false}
                     style={{flex:1}}/>

                     <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
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


             <Button title="S I G N U P" onPress={isValid ? handleSubmit : invalidform} isValid={isValid} loader={loader} />

             <Text onPress={()=>{navigation.goBack()}} style={{textAlign:"center",marginTop:20,marginBottom:30,color:COLORS.blue}}>Log in</Text>
           </View>
          )}
          
        </Formik>


      </View>
    </SafeAreaView>
  </ScrollView>
  )
}

export default Signup

