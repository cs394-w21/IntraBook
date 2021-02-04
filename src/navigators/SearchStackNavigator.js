import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import ItemScreen from '../screens/ItemScreen';


const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown: false, title: ''}} />
            <Stack.Screen name='ItemScreen' component={ItemScreen} options={{title: ''}} />
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
