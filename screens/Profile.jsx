import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './profile.style'
import { COLORS } from '../constants'
import { TouchableOpacity } from 'react-native'
import { Feather,Ionicons,MaterialCommunityIcons,SimpleLineIcons,AntDesign} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Profile = ({ navigation }) => {
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

  const userLogout = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const userId = `user${JSON.parse(id)}`;
  
      console.log("hhhh");
  
      // To remove multiple keys from AsyncStorage, you should call AsyncStorage.removeItem for each key.
      // In your case, you want to remove 'id' and 'user{id}'.
      await AsyncStorage.removeItem('id');
      await AsyncStorage.removeItem(userId);
  
      console.log("logout");
      navigation.replace("BottomNavigation");
    } catch (error) {
      console.log("Error to logout user", error);
    }
  }
  

  const logout = () =>{
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text:'Cancel',onPress:()=>console.log("cancell pressed")
        },
        {
          text:'Continue',onPress:()=>userLogout()
        },
        {defaultIndex:1}
      ]
    )
  }

  const clearCache = () =>{
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your devices",
      [
        {
          text:'Cancel',onPress:()=>console.log("cancell ")
        },
        {
          text:'Continue',onPress:()=>console.log("clear")
        },
        {defaultIndex:1}
      ]
    )
  }

  const DeleteAccount = () =>{
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account",
      [
        {
          text:'Cancel',onPress:()=>console.log("cancell pressed")
        },
        {
          text:'Continue',onPress:()=>console.log("logout pressed")
        },
        {defaultIndex:1}
      ]
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar />

        <View style={{ width: "100%" }}>
          <Image
            source={require('../assets/images/space.jpg')}
            style={styles.cover} />
        </View>

        <View style={styles.profilecontainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profile} />

          <Text style={styles.name}>
            {userLogin === true ? userData.name : "Pleae Login your Account"}
          </Text>

          {userLogin === false ? (
            <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
              <View style={styles.loginbtn}>
                <Text style={styles.menutext}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuwrapper}>
              <TouchableOpacity onPress={()=>navigation.navigate('Favourite')}>
                   <View style={styles.menuitem(.5)}>
                    <MaterialCommunityIcons
                    name='heart-outline'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>Favourite</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('Order')}>
                   <View style={styles.menuitem(.5)}>
                    <MaterialCommunityIcons
                    name='truck-delivery-outline'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>Orders</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('Cardp')}>
                   <View style={styles.menuitem(.5)}>
                    <SimpleLineIcons
                    name='bag'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>card</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>clearCache()}>
                   <View style={styles.menuitem(.5)}>
                    <MaterialCommunityIcons
                    name='cached'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>Clear cache</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>DeleteAccount()}>
                   <View style={styles.menuitem(.5)}>
                    <AntDesign
                    name='deleteuser'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>Delete Account</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>logout()}>
                   <View style={styles.menuitem(.5)}>
                    <AntDesign
                    name='logout'
                    size={24}
                    color={COLORS.primary}/>
                    <Text style={styles.menutext}>Log out</Text>
                  </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile

