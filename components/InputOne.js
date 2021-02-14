import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import image from '../assets/logo.png';

export default function InputOne(props) {
const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{" "+props.titulo}</Text>
      <TextInput 
        style={styles.inputtext}
        secureTextEntry={props.pass}
        placeholder={"Escribir aqui su "+props.titulo}
        onChangeText={text => onChangeText(text)}
        
        value={value}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius:10,
    marginTop:10,
  },
  inputtext:{
    height: 50, 
    borderRadius:20,
    padding:8, 
    color:'#111',
    fontWeight:'bold',
    backgroundColor:"#ddd",
  },
  titulo:{
    color:'#111',
    fontWeight:'bold',
    fontSize:14,
  },
});
