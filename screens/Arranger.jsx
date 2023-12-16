import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{Component} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native'



const Arranger = () => {
      const navigation = useNavigation();
       const handleDone =()=>{
           navigation.navigate('BottomNavigation');
       }

       
       
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleDone}>
      <View style={styles.headingContainer}>
        <Image style={{height:100,width:100}} source={require('../assets/2.jpg')}/>
        <Text style={{fontSize:50,color:"#096B88",fontWeight:"900"}}>eCycLo</Text>
      </View>
      </TouchableOpacity>

      
      
      <Onboarding 
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{marginTop:-100}}

        pages={[

          {
            
            backgroundColor: '#fff',
           
            image: (
              <ImageBackground style={{height:400,width:400,marginTop:0}} source={require('../assets/leaf.png')}/>
            ),
            title:(
              <View>
              <Text style={{ fontSize:25,color:"#096B88",fontWeight:'900',marginTop:-40}}>ReDuce | ReCye | ReUse </Text>
              <TouchableOpacity onPress={handleDone}>
                <View style={{borderColor:"black",borderWidth:1,borderRadius:80,marginBottom:-50,marginTop:20,backgroundColor:'#3A7F0D'}}>
                       <Text style={{fontSize:30,marginVertical:10,textAlign:"center",fontWeight:'900',color:'#fff'}}>Get Start</Text>
                </View>
              </TouchableOpacity>
              </View>
            ),
            subtitle:""
          
          },
          

          {
            
            backgroundColor: '#fff',
            image: (
              <View>
                <Image style={{height:230,width:340}} source={require("../assets/3.jpg")}/>
              </View>
            ),
            title: (
              <View style={styles.headingbox1}>
                <Text style={styles.headingtext}>Reduce</Text>
              </View>
              
            ),
            subtitle: (
              <View style={styles.bodybox}>
                 <Text style={styles.bodytext}>Recycling involves reusing materials instead of discarding them. Here are a few ways in which text can be recycled</Text>
              </View>
              
            ) ,
          },

          {
            
            backgroundColor: '#fff',
            image: (
              <View>
                <Image style={{height:230,width:300}} source={require("../assets/5.jpg")}/>
              </View>
            ),
            title: (
              <View style={styles.headingbox2}>
                <Text style={styles.headingtext}> Recycle </Text>
              </View>
              
            ),
            subtitle: (
              <View style={styles.bodybox}>
                 <Text style={styles.bodytext}>Recycling involves reusing materials instead of discarding them. Here are a few ways in which text can be recycled</Text>
              </View>
              
            ) ,
          },

          {
            
            backgroundColor: '#fff',
            image: (
              <View>
                
                <Image style={{height:230,width:280}} source={require("../assets/4.jpg")}/>
                
              </View>
            ),
            title: (
              <View style={styles.headingbox3}>
                <Text style={styles.headingtext}>Reuse</Text>
              </View>
              
            ),
            subtitle: (
              <View style={styles.bodybox}>
                 <Text style={styles.bodytext}>Recycling involves reusing materials instead of discarding them. Here are a few ways in which text can be recycled</Text>
              </View>
              
            ) ,
          },
        ]}
      />
      
    </SafeAreaView>
  )
}

export default Arranger

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headingContainer:{
     flexDirection:"row",
     marginTop:10,
     alignItems:"baseline",
     marginLeft:50
  },
  headingbox1:{
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
    marginTop:-35,
    paddingHorizontal:96,
    
  },
  headingbox2:{
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
    marginTop:-35,
    paddingHorizontal:84,
    
  },
  headingbox3:{
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
    marginTop:-35,
    paddingHorizontal:110,
    
  },

  headingtext:{
    
    paddingTop:30,
    paddingBottom:5,
    fontSize:40,
    fontWeight:"800",
    color:"#096B88"
  },
  bodybox:{
    backgroundColor: '#F5F5F5',
    borderColor: '#F5F5F5',
    borderTopColor:"#DCD8D8",
    borderWidth: 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginHorizontal:31
  },
  bodytext:{
    
    paddingVertical:15,
    marginHorizontal:26,
    fontSize:20,
    fontWeight:"100",
    color:"#000000",
    fontWeight:"800",
    textAlign:'justify',
    lineHeight:30
  }
  
})