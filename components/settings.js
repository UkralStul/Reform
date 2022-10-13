import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import ListOfSettings from './listOfSettings';






export default function Settings({navigation}) {
  const loadScene = () => {
    navigation.goBack();
  }

  const [settings, setSettings] = useState([
    {text: 'Что-то'},
    {text: 'Что-то'},
    {text: 'Что-то'},
    {text: 'Что-то'},
  ]);
  return (
    <View style={styles.view}>
      <SafeAreaView>
        <Text style={styles.textHeader}>Настройки</Text>
        <TouchableOpacity onPress={loadScene}>
          <Text style={styles.backButton}>Готово</Text>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Уведомления</Text>
        <FlatList data={settings} renderItem={({item}) => (
          <ListOfSettings el={item} />
        )} />
        <Text style={styles.textHeader}>Что-то</Text>
        <FlatList data={settings} renderItem={({item}) => (
          <ListOfSettings el={item} />
        )} />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
 
  textHeader:{
    fontSize:40,
    fontFamily: 'os-medium',
    color: 'white',
    left:30,
    top: 10
  },
  backButton:{
    fontSize:24,
    fontFamily: 'os-medium',
    color: 'gray',
    left:280,
    top: -31
  },
  view:{
    flex: 1,
    backgroundColor: '#082B5C'
  }
});
