import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Switch } from 'react-native';







export default function ListOfSettings({el}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.view}>
        <View><Text style={styles.text}>{el.text}</Text></View>
        <View style={styles.viewSwitch}><Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
         /></View>
    </View>
  );
}
const styles = StyleSheet.create({
    viewSwitch:{
        left: 205,
        top: 11
    },
    view:{
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize:24,
        fontFamily: 'os-medium',
        color: 'white',
        left: 40,
        padding: 10
      },
});
