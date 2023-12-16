import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './newArrivals.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProductList } from '../component/index'

const NewArrivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.upperrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} color={COLORS.lightWhite} />
        </TouchableOpacity>

           <Text style={styles.heading}>Products</Text>
        </View>
        </View>
        <ProductList/>
    </SafeAreaView>
  )
}

export default NewArrivals

