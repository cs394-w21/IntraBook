import React from 'react';
import { TextInput, View, Icon } from 'react-native';

const SearchBar = ({ query, setQuery, getResults }) => {
    const handleKeyDown = (e) => {
      if(e.nativeEvent.key == "Enter"){
        getResults();
    }
    };

    return (
      <View
        style={{
          backgroundColor: '#333333',
          padding: 15,
          borderRadius: 10,
          width: '100%',
          height: '80%',
          alignContent: 'center',
          justifyContent : 'center'
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => setQuery(queryText)}
          placeholder="🔎 Author, Course Number, Book Name, etc..."
          placeholderTextColor='grey'
          style={{ backgroundColor: '#333333', color: 'white', height: 20 }}
          onKeyPress={handleKeyDown}
        />

      </View>
    );
};

export default SearchBar;
