import {StyleSheet} from 'react-native';
import {COLORS,SIZES} from "../../constants/index";


const styles= StyleSheet.create({
 container:{
    
    width:'100%'
 },
 welcometxt:(color)=>({
    fontFamily:"bold",
    fontSize:SIZES.xxLarge -10,
    color:color,
    marginHorizontal:33
 }),

 headingContainer: {
  flexDirection: "row",
  alignItems: "baseline",
  marginLeft: 50
},
 serchcontainer:{
   flexDirection:"row",
   alignItems:'center',
   justifyContent:"center",
   backgroundColor:"#898b8c",
   marginVertical:SIZES.small,
   height:40,
   marginHorizontal:SIZES.small
 },
 serchicon:{
   marginHorizontal:10,
   color:COLORS.black,
 },
 serchwrapper:{
   flex:1,
   backgroundColor:COLORS.secondary,
   marginRight:SIZES.small,
   borderRadius:SIZES.small,
 },
 searchinput:{
   fontFamily:'regular',
   width:"100%",
   height:'100%',
   paddingHorizontal:SIZES.small,
   backgroundColor:"#898b8c",
   
   
 },
 searchbtn:{
   backgroundColor:COLORS.green,
   width:50,
   height:'100%',
   borderRadius:SIZES.medium,
   alignItems:'center',
   justifyContent:"center",
 }
});

export default styles;