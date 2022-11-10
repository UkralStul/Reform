import React, { useState } from 'react';
import { StyleSheet,TextInput,Text, Button, View, SafeAreaView, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native';




export default function Main({navigation}) {
  const loadScene = () => {
    navigation.navigate('Settings');
  }



    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/backgroundImage.jpg')} resizeMode="cover" style={styles.image}>
          
            <View style={styles.textView}><Text style={styles.text}>Добрый день{'\n'}USERNAME</Text></View>
            <View style={styles.buttons}><TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Практика</Text>
            </TouchableOpacity></View>
            <View style={styles.buttons}><TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Диалог</Text>
            </TouchableOpacity></View>
            <View style={styles.buttons}><TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Музыка</Text>
            </TouchableOpacity></View>
            <View style={styles.buttons}>
              <View style={styles.buttons}></View>
              <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.profileImage}>
                  <Image source={require('../assets/icons8-user-60.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsImage} onPress={loadScene}>
                  <Image source={require('../assets/icons8-menu-60.png')}/>
                </TouchableOpacity>
                // awds
              </View>
            </View>

        </ImageBackground>
        
      </View>
    );
  } 

const styles = StyleSheet.create({
  settingsImage:{
    height:72,
    width: 72,
    top: -60,
    left: 20
  },
  profileImage:{
    height:72,
    width: 72,
    top: 10,
    left: 295
  },
  bottomMenu:{
    flex: 2,
    backgroundColor:'#6371A0',
    height: 1000
  },
  textView: {
    flex: 2
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-around'
  },
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    height: 70,
    width: 250,
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  appButtonText: {
    fontSize: 24,
    color: "#48598D",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: 'inter-semiBold'
  },
  container:{
    flex: 1,
  },
  image:{
    flex: 1,
    justifyContent: "center"  
  },
  text: {
    flex: 1,
    justifyContent: "top",
    top: 110,
    right: -25,
    fontSize: 36,
    color: '#48598D',
    fontFamily: 'inter-semiBold'

  }
});
