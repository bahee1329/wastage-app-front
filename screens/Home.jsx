import { StyleSheet, Text, View,TouchableOpacity, ScrollView  } from 'react-native'
import React,{useEffect,useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons,Fontisto } from '@expo/vector-icons';
import {Headings,Carcusel, Welcome } from '../component';
import Productcardrow from '../component/products/Productcardrow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants';
import Sell from './Sell';


const Home = () => {
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(()=>{
    cheakExistingUser();
  },[]);

  const cheakExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }else{
        navigation.navigate('Login')
      }
    }catch(error){
       console.log("Error retrieving the data",error)
    }
  }
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color={COLORS.green}/>

          <Text style={styles.location}>{userData ? userData.location : "non "}</Text>

          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cardcount}>
              <Text style={styles.cardnumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color={COLORS.green}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome/>
        <Carcusel/>
        <Sell/>
        <Headings/>
        <Productcardrow/>
      </ScrollView>
        
      
        
    </SafeAreaView>
  )
}

export default Home

