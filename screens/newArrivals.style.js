import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:COLORS.lightWhite,
      
   },
   wrapper:{
    flex:1,
    backgroundColor:COLORS.lightWhite
   },
   upperrow:{
    width:SIZES.width -50,
    backgroundColor: COLORS.primary,
    marginHorizontal:SIZES.large,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    position:'absolute',
    top:SIZES.large,
    zIndex:999,
     borderRadius:SIZES.large
   },
   heading:{
    fontFamily:"semibold",
    fontSize:SIZES.medium,
    color:COLORS.lightWhite,
    marginLeft:115
   }
})

export default styles;