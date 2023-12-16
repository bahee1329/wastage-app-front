import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SliderBox} from '../../node_modules/react-native-image-slider-box'
import {COLORS,SIZES} from '../../constants/index'

const Carcusel = () => {
    const slides =[
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/1193309211/photo/volunteers-in-the-park.jpg?s=2048x2048&w=is&k=20&c=vPvF90VWRK8972MOe5lSIS1i-rIzI5gWLx8Z8ZD7NBs=",
        "https://media.istockphoto.com/id/1342229204/photo/a-lake-in-the-shape-of-a-recycling-sign-in-the-middle-of-untouched-nature-an-ecological.jpg?s=2048x2048&w=is&k=20&c=0CxugTQrZzj0augdXZWIIEBWx6EKO9HG2srdG2Ihu0k=",
        
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

export default Carcusel

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center'
  }
})