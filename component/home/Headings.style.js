import { StyleSheet } from "react-native";
import {SIZES,COLORS} from '../../constants/index'

const styles = StyleSheet.create({
 container:{
    marginBottom:12,
    marginTop:-20,
    marginHorizontal:12
 },
 wrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:5
 },
 headertitle:{
    fontFamily:'semibold',
    fontSize:SIZES.xLarge -2,
    color:COLORS.green
 }
})

export default styles;