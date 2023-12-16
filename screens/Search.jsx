import { View,TouchableOpacity,TextInput,Image,Text } from 'react-native'
import React,{useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './search.style';
import {Feather,Ionicons} from '@expo/vector-icons';
import {SIZES,COLORS} from '../constants/index'
import axios from 'axios';
import { FlatList } from 'react-native';
import SearchTitle from '../component/products/SearchTitle';

const Serch = () => {
  const [value,setvalue] = useState('')
  const [searchresult,setsearchresult]= useState([])

  const pressHandle = async() =>{
    try {
      
      const result = await axios.get(`http://192.168.150.20:3000/api/products/search/${value}`)
      setsearchresult(result.data)
      console.log(searchresult)
    } catch (error) {
      console.log("error to get the data",error)
    }
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.serchcontainer}>
        <TouchableOpacity>
            <Feather name="search" size={24} style={styles.serchicon }/>
        </TouchableOpacity>

        <View style={styles.serchwrapper}>
          <TextInput
          value={value}
          onChangeText={setvalue}
          style={styles.searchinput}
          placeholder='What are you looking for'/>
        </View>
        
        <View>
          <TouchableOpacity style={styles.searchbtn} onPress={()=>pressHandle()}>
            <Ionicons name="search" size={SIZES.xLarge} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
    </View>
    {searchresult.length === 0 ? (
      <View style={{flex:1}}>
        <Image
         source={require('../assets/images/Pose23.png')}
         style={styles.photo}/>
      </View>
    ):(
      <FlatList
      data={searchresult}
      keyExtractor={searchresult._id}
      renderItem={({item})=><SearchTitle item={item}/>}
      />
    )}
    </SafeAreaView>
  )
}

export default Serch

