import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './productdetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setcount] = useState(1)
  const route =useRoute();

  const {item} = route.params;

  const increment = () => {
    setcount(count + 1)
  }

  const decrement = () => {
    if (count > 1)
      setcount(count - 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.blue} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: "https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80" }}
        style={styles.image} />

      <View style={styles.details}>
        <View style={styles.titlerow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.pricewrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingrow}>
          <View style={styles.rating} >
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color={COLORS.blue}
              />
            ))}

            <Text style={styles.ratingtext}>(4.9)</Text>
          </View>

          <View style={styles.rating} >
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name='plus'
                size={20}
              />
            </TouchableOpacity>

            <Text style={styles.ratingtext}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name='minus'
                size={20}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.deswrapper}>
          <Text style={styles.des}>Description</Text>
          <Text style={styles.destext}>{item.description}</Text>
        </View>

        <View style={{marginBottom:SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection:'row'}}>
              <Ionicons
               name="location-outline"
               size={20}
              />
              <Text>colombo</Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons
               name='truck-delivery-outline'
               size={20}
              />
              <Text>Free delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardrow}>
          <TouchableOpacity onPress={()=>{}} style={styles.cardbtn}>
            <Text style={{color:"black",fontSize:20,fontWeight:"600"}}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}} style={styles.addbtn}>
            <Fontisto name='shopping-bag' size={22} color={COLORS.black}/>
          </TouchableOpacity>
        </View>



      </View>
    </View>
  )
}

export default ProductDetails

