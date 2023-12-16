import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../constants/index'

const styles = StyleSheet.create({
  container:{
    height:260,
    width:182,
    borderRadius:SIZES.medium ,
    marginEnd:20,
    backgroundColor:COLORS.green
  },
  imagecontainer:{
    flex:1,
    width:170,
    overflow:'hidden',
    marginLeft:SIZES.small/2,
    marginTop:SIZES.small/2,
    borderRadius:10
  },
  image:{
    aspectRatio:1,
    resizeMode:'cover'
  },
  details:{
    paddingHorizontal:10,
  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.large

  },
  supplier:{
    fontFamily:"regular",
    fontSize:SIZES.small,
    color:COLORS.black,
    marginTop:-5
    

  },
  price:{
    fontFamily:"bold",
    fontSize:SIZES.medium,
    

  },
  addbtn:{
     position:'absolute',
     bottom:SIZES.small -5,
     right:SIZES.small  -10
  }
})

export default styles;