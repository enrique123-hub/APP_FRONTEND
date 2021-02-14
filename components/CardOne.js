import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import image from '../assets/clip.png';

export default function CardOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image
        source={image}
        style={styles.logo}
      />
        <TouchableOpacity
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.boton}
        >
           <Text style={styles.textboton}> Press Me</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#470A76',
    margin:5,
    borderRadius:10,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    color:'#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  boton:{
      backgroundColor: "#f02",
      borderRadius:7,
      padding:7,
     
      
  },
  textboton:{
      color: "#fff",
      fontSize: 16,
      fontWeight:'bold',
  }
});
