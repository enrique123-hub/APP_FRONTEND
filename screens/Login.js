import * as React from 'react';
import { Text, View, StyleSheet, Alert,Image,Button,TouchableOpacity, Dimensions } from 'react-native';
import InputOne from '../components/InputOne'
import Imge from '../assets/personas.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={Imge}
      />
       <Text style={styles.texting}>Iniciar Sesion</Text>
       <Text style={styles.message}>Favor de ingresar los datos solicitados</Text>

        <InputOne 
          titulo = {"Usuario"} 
          pass = {false}
        />
        <InputOne 
          titulo = {"Contraseña"} 
          pass={true}
        />

        <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate("Dashboard")}>
            <View style={styles.button}>
                <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>Ingresar</Text>
            </View>
        </TouchableOpacity>

        <Text style={{color:'#222',fontSize:12,marginTop:50,fontWeight:'bold'}}>
          ¿Ha olvidado la contraseña? Recuperar Contraseña 
        </Text>
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
    backgroundColor:"#eee",

  },
  texting:{
    fontSize:30,
    fontWeight:'bold',
    color:'#111',
  },
  message:{
    fontSize:15,
    fontWeight:'bold',
    color:'#555',
    marginBottom:20,
  },
  button:{
      backgroundColor:"#111",
      width:150,
      height:35,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
  },
  tinyLogo:{
    width:125,
    height:125,
  }
});
