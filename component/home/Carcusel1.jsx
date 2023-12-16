import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from '../../node_modules/react-native-image-slider-box'
import {COLORS,SIZES} from '../../constants/index'

const Carcusel1 = () => {
    const slides =[
        "https://media.istockphoto.com/id/1534236824/photo/industrial-recycling.jpg?s=2048x2048&w=is&k=20&c=19382EwBjeCDanc_WJe7dn4GRpGE8VgtJY-E5dbjMOI=",
        "https://media.istockphoto.com/id/1355067252/photo/volunteers-collecting-litter-in-the-park.jpg?s=2048x2048&w=is&k=20&c=EMTZ4wosNppHvS7-_FAayzltar949DTmacMbhf_jUJ0=",
        "https://media.istockphoto.com/id/1414465887/photo/a-woman-and-a-little-girl-throw-plastic-bottles-into-a-plastic-bag.jpg?s=2048x2048&w=is&k=20&c=WUvqXqd8p_37hY2rMdxMCCzyYbVR5yfMZuklwNt0Myo=",
        
    ] 
  return (
    <View style={styles.Container}>
      <SliderBox images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor ={COLORS.secondary}
      ImageComponentStyle = {{borderRadius:15,marginTop:20,width:'95%'}}
      autoplay
      circleLoop
     /> 
    </View>
  )
}

export default Carcusel1

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center'
  }
})