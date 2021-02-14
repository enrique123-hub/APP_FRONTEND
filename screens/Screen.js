import * as React from 'react';
import { Text, View, StyleSheet, Alert,Image,Button,TouchableOpacity, Dimensions } from 'react-native';
//import InputOne from '../components/InputOne'
//import Imge from '../assets/personas.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height-350;

export default function Screen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical:10,
    marginTop:0,
    width:windowWidth,
    height:windowHeight,
  },
});
