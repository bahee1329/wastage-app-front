import { View, Text, StyleSheet, TouchableOpacity ,ActivityIndicator} from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const Button = ({ title, onPress,isValid,loader }) => {
  
  return (
    <TouchableOpacity style={styles.btnstyle(isValid === false ? COLORS.blue : COLORS.green)} onPress={onPress}>
      {loader === false ? (<Text style={styles.btntxt}>{title}</Text>):(<ActivityIndicator/>)}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btntxt: {
    fontFamily: "bold", // Replace with the actual font family
    color: COLORS.white,
    fontSize: 18,
  },
  btnstyle: (backgroundColor) => ({
    height: 50,
    width: '100%',
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    
  }),
});
