import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen} />
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
