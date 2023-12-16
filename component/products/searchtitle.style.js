import { StyleSheet } from "react-native";
import {SIZES,COLORS,SHADOWS} from '../../constants/index'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:'space-between',
    marginBottom:SIZES.small,
    flexDirection:'row',
    padding:SIZES.small,
    backgroundColor:'#fff',
    ...SHADOWS.medium,
    shadowColor:COLORS.lightWhite
 },
 image:{
    width:70,
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    justifyContent:"center",
    alignContent:"center"
 },
 productimg:{
    width:'100%',
    height:65,
    borderRadius:SIZES.small,
    resizeMode:'cover'
 },
 textcontainer:{
    flex:1,
    marginHorizontal:SIZES.medium
 },
 producttitle:{
    fontSize:SIZES.medium,
    fontFamily:"bold",
    color:COLORS.primary
 },
 supplier:{
    fontSize:SIZES.small +2,
    fontFamily:"regular",
    color:COLORS.gray,
    marginTop:3
 }
})


export default styles;