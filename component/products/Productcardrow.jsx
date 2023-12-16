import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Productcartview from './Productcartview';
import useFetch from '../../hook/useFetch';
import { ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const Productcardrow = () => {
    const {data,isLoading,error} =useFetch();

    return (

        <View style={{marginBottom:50,marginHorizontal:20}}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.large} color={COLORS.primary}/>
            ):error ? (
            <Text>Something went wrong</Text>
            ):(
                <FlatList
                data={data}
                keyExtractor={(item)=>item._id}
                renderItem={({ item }) => <Productcartview item={item}/>}
                horizontal
                contentContainerStyle={{ columnGap: 10 }}
            />
            )
              
            

            }
            
            
            
        </View>

    )
}

export default Productcardrow