import  {StyleSheet} from 'react-native';
import {COLORS,SIZES} from '../constants/index';

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  
  },
  upperrow:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    justifyContent:'space-between',
    zIndex:999,
    position:'absolute',
    top:SIZES.xxLarge ,
    width:SIZES.width -44

  },
  image:{
    aspectRatio:1,
    resizeMode:"cover"
  },
  details:{
    marginTop:-SIZES.small,
    width:SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius:SIZES.medium,
    backgroundColor:COLORS.lightWhite
  },
  titlerow:{
    marginHorizontal:20,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    width:SIZES.width -44,
    top:20
  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.large
  },
  price:{
    paddingHorizontal:10,
    fontFamily:"bold",
    fontSize:SIZES.large
  },
  pricewrapper:{
    backgroundColor:COLORS.blue,
    borderRadius:SIZES.large
  },
  ratingrow:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    top:10,
    paddingBottom:SIZES.small,
    marginHorizontal:20
    
  },
  rating:{
    top:SIZES.large,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:'center',
  },
  ratingtext:{
    color:COLORS.gray,
    fontFamily:"medium",
    marginHorizontal:10,
    color:COLORS.blue
  },
  deswrapper:{
    marginTop:30,
    marginHorizontal:20
  },
  des:{
    fontFamily:'bold',
    fontSize:SIZES.large -2,
  },
  destext:{
    fontFamily:'regular',
    marginBottom:SIZES.small,
    fontSize:SIZES.small,
    textAlign:'justify',
    color:COLORS.blue

  },
  location:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:COLORS.blue,
    padding:5,
    borderRadius:SIZES.large,
    marginHorizontal:12
    
  },
  cardrow:{
    paddingBottom:SIZES.small,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:12,
    marginTop:20
  },
  cardbtn:{
    width:SIZES.width*0.7,
    backgroundColor:COLORS.blue,
    padding:SIZES.small,
    borderRadius:SIZES.large,
    marginLeft:12,
    alignItems:"center"

  },
  addbtn:{
     height:45,
     width:45,
     borderRadius:50,
     backgroundColor:COLORS.blue,
     alignItems:'center',
     justifyContent:'center',
     marginEnd:30
  }
})

export default styles;