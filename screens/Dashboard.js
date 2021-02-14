import * as React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import CardOne from '../components/CardOne'
//import Imge from '../assets/personas.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height-350;

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <CardOne/>
      <CardOne/>
      <CardOne/>
      <CardOne/>
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
