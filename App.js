import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View, ImageBackground } from 'react-native';
import  Login  from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import image from "./assets/fondo.png"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false,}}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Welcome' }}
        />
       
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
