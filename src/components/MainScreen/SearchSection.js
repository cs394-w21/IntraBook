import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

const SearchSection = ({ getResults,query, setQuery }) => {
    return (
        <View style={styles.container}>
            <SearchBar query={query} setQuery={setQuery} />
            <SearchButton getResults={getResults} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 5,
    },
});

export default SearchSection;
