import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native';

const Sell = () => {
    const navigation = useNavigation();
  return (
   <SafeAreaView>
    <TouchableOpacity onPress={()=>{navigation.navigate('sellform')}} >
      <Text style={styles.heading}> Sell Your Wastages</Text>
      <View style={styles.container}>
      <Image
        source={require('../assets/6.jpg')} 
        style={styles.image}
      />
      </View>
      </TouchableOpacity>
   </SafeAreaView>
  )
}

export default Sell

const styles = StyleSheet.create({

    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginTop:2
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-80
      },
    heading:{
        fontFamily:"bold",
        textAlign:"center",
        color:COLORS.green,
        fontSize:24,
        zIndex:999
    }
})