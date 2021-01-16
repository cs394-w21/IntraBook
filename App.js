import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SearchStackNavigator from './src/navigators/SearchStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SearchStackNavigator />
    </NavigationContainer>
  );
};

export default App;
