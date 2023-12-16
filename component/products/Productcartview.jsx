import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productcartview.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Productcartview = ({item}) => {
  const navigation =useNavigation();
  return (
    <View style={{ marginBottom: 30 }}>
      <TouchableOpacity onPress={()=> navigation.navigate('productdetails',{item})}>
        <View style={styles.container}>
          <View style={styles.imagecontainer}>
            <Image
              source={{ uri:"https://hips.hearstapps.com/hmg-prod/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg?resize=1200:*" }}
              style={styles.image}
              />

            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1} >{item.title}</Text>
              <Text style={styles.supplier}>{item.suppiler}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>

            <TouchableOpacity style={styles.addbtn}>
              <Ionicons name="add-circle" size={35} color={COLORS.black}/>
            </TouchableOpacity>
          </View>


        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Productcartview