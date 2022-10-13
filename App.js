import React, { useState } from 'react';
import { StyleSheet,TextInput,Text, Button, View, SafeAreaView, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigation';



const fonts = () => Font.loadAsync({
  'inter-light': require('./assets/fonts/Inter-Light.ttf'),
  'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
  'inter-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  'os-bold': require('./assets/fonts/Oswald-Bold.ttf'),
  'os-light': require('./assets/fonts/Oswald-Light.ttf'),
  'os-medium': require('./assets/fonts/Oswald-Medium.ttf'),
});

export default function App() {

  const [font,setFont] = useState(false);

  if(font){
    return (
      <MainStack />
    );
  } else{
    return(
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}

