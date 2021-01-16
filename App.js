import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import SearchStackNavigator from './src/navigators/SearchStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SearchStackNavigator />
    </NavigationContainer>
  );
};
