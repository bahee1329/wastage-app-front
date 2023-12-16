import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react';
import useFetch from './../../hook/useFetch';
import { COLORS,SIZES } from '../../constants';
import styles from './productlist.style';
import Productcartview from './Productcartview';

const ProductList = () => {
    const {data,isLoading,error} = useFetch();

    if(isLoading){
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={SIZES.xxLarge}
      color={COLORS.primary}/>
    </View>
  )
    }

    return(
        <View style={styles.container}>
          <FlatList
          data={data}
          numColumns={2}
          renderItem={({item})=>(<Productcartview item={item}/>)}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={()=><View style={styles.separation}/>}/>
        </View>
    )
}

export default ProductList

