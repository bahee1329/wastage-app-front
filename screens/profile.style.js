import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants/index";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    cover:{
        height:300,
        width:"100%",
        resizeMode:'cover'
    },
    profile:{
        height:155,
        width:155,
        borderRadius:999,
        borderColor:COLORS.primary,
        borderWidth:5,
        resizeMode:'cover',
        marginTop:-90
    },
    profilecontainer:{
       flex:1,
       alignItems:"center"
    },
    name:{
        fontFamily:'bold',
        color:COLORS.primary,
        marginVertical:5
    },
    loginbtn:{
      backgroundColor:COLORS.secondary,
      padding:2,
      borderWidth:.4,
      borderRadius:SIZES.xxLarge
    },
    menutext:{
       fontFamily:'regular',
       fontSize:14,
       fontWeight:'600',
       marginHorizontal:20,
       lineHeight:26,
       color:COLORS.gray
    },
    menuwrapper:{
        marginTop:SIZES.xLarge,
        width:SIZES.width-SIZES.large,
        backgroundColor:COLORS.white,
        borderRadius:12
    },
    menuitem: (borderBottomWidth)=>({
        borderBottomWidth:borderBottomWidth,
        flexDirection:"row",
        paddingVertical:10,
        paddingHorizontal:30,
        borderColor:COLORS.gray
    })
    
})

export default styles;