import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../constants/index';
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles =StyleSheet.create({
  cover:{
    height:SIZES.height/2,
    width:SIZES.width -30,
    resizeMode:'contain',
    marginBottom:10,
    resizeMode:'cover',
    borderRadius:30
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 50
  },
  title:{
    fontFamily:"bold",
    fontSize:SIZES.xLarge -3,  
    color:COLORS.blue,
    alignItems:"center",
    marginTop:40  },
  wrapper:{
    marginBottom:20,
    marginHorizontal:0
  },
  container:{
    marginBottom:20
  },
  label:{
    fontFamily:"regular",
    fontSize:SIZES.xSmall,
    marginBottom:5,
    marginEnd:5,
    textAlign:"right",
    color:COLORS.green
  },
  inputwrapper:(borderColor)=>({
    borderColor:borderColor,
    backgroundColor:'#d9dadb',
    borderWidth:1,
    height:55,
    borderRadius:12,
    flexDirection:'row',
    paddingHorizontal:15,
    alignItems:"center"
  }),
  iconstyle:{
    marginRight:10
  },
  errormsg:{
    color:COLORS.red,
    fontFamily:"regular",
    marginTop:5,
    marginLeft:5,
    fontSize:SIZES.xSmall

  }
});

export default styles;