import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const Backbtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems:'center',position:'absolute',zIndex:999,top:SIZES.large-10}}>
        <Ionicons
          name='chevron-back-circle'
          size={30}
          color={COLORS.primary}/>
    </TouchableOpacity>
  )
}

export default Backbtn