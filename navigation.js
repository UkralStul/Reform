import React from "react";
import Main from './components/main';
import Settings from './components/settings';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{headerShown: false}}
                />
            <Stack.Screen
                name='Settings'
                component={Settings}
                options={{headerShown: false}}
                />
        </Stack.Navigator>
    </NavigationContainer>;
}