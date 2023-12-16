import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './searchtitle.style'
import { useNavigation } from '@react-navigation/native'

const SearchTitle = ({item}) => {

    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate("productdetails",{item})}}>
        <View style={styles.image}>
            <Image
             source={{uri:item.Image}}
             style={styles.productimg}
             />
        </View>

        <View style={styles.textcontainer}>
            <Text style={styles.producttitle}>{item.title}</Text>
            <Text style={styles.supplier}>{item.suppiler}</Text>
            <Text style={styles.prize}>{item.price}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default SearchTitle