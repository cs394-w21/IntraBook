import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
            <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen} />
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
