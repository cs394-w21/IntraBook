import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen} options={{headerShown: false}} />
            <Stack.Screen name='ItemScreen' component={ItemScreen} options={{title: ''}} />
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
