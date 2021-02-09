import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ query, setQuery }) => {
    return (
      <View
        style={{
          backgroundColor: '#333333',
          padding: 10,
          borderRadius: 10,
          width: '80%',
          height: '60%'
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => setQuery(queryText)}
          placeholder="Author, Course Number, Book Name, etc..."
          placeholderTextColor='grey'
          style={{ backgroundColor: '#333333', color: 'white', height: 20 }}
        />
      </View>
    );
};

export default SearchBar;
