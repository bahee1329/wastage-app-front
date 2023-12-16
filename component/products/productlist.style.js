import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        marginBottom:250
    },
    container:{
        alignItems:'center',
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2
    },
    separation:{
        height:16
    }
})

export default styles;