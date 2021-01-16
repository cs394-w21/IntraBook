import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen} options={{title: ''}} />
            <Stack.Screen name='ItemScreen' component={ItemScreen} options={{title: ''}} />
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
