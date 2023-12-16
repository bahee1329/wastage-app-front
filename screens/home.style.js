import {StyleSheet} from 'react-native';
import {COLORS,SIZES} from "../constants/index";

const styles = StyleSheet.create({
   container:{
       backgroundColor:"white",
       marginBottom:50
   },

   appBarWrapper:{
     marginHorizontal:22,
     marginTop:SIZES.small,
   },

   appBar:{
   
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center'
   },
   location:{
        color:COLORS.blue,
        fontFamily:'semibold',
        fontSize:SIZES.medium
   },
   cardcount:{
      position:'absolute',
      zIndex:999,
      height:16,
      bottom:18,
      left:8,
      width:16,
      borderRadius:10,
      backgroundColor:COLORS.black,
      alignItems:'center',
      justifyContent:'center'

   },
   cardnumber:{
      fontFamily:'regular',
      color:COLORS.lightWhite,
      fontSize:10,
      fontWeight:"800"
   }

})

export default styles;