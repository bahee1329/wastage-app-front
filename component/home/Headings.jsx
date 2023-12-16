import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './Headings.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';


const Headings = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headertitle}>New Rivals</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("newArrivals")}}>
            <Ionicons name="ios-grid" size={24} color={COLORS.green}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings
