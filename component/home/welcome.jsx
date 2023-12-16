import { StyleSheet, Text, View,TouchableOpacity, TextInput,Image } from 'react-native'
import React from 'react'
import styles from "./Welcome.style";
import { COLORS, SIZES } from '../../constants';
import {Feather,Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const welcome = () => {
  const navigation = useNavigation();
  return (
    <View>

    <View style={styles.container}>
      
    <TouchableOpacity >
        <View style={styles.headingContainer}>
          <Image style={{ height: 100, width: 100 }} source={require('../../assets/2.jpg')} />
          <Text style={{ fontSize: 50, color: "#096B88", fontWeight: "900" }}>eCycLo</Text>
        </View>
    </TouchableOpacity>

    <Text style={styles.welcometxt(COLORS.primary)}>
        {" "}
        Reuse Everything</Text>
    </View>

    <View style={styles.serchcontainer}>
        <TouchableOpacity>
            <Feather name="search" size={24}  style={styles.serchicon }/>
        </TouchableOpacity>

        <View style={styles.serchwrapper}>
          <TextInput
          value=''
          onPressIn={()=>{navigation.navigate('Search')}}
          style={styles.searchinput}
          placeholder='What are you looking for'/>
        </View>
        <View>
          <TouchableOpacity style={styles.searchbtn}>
            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.black} />
          </TouchableOpacity>
        </View>
    </View>

    </View>
  )
}

export default welcome

