import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

const SearchSection = ({ navigation, query, setQuery }) => {
    return (
        <View style={styles.container}>
            <SearchBar query={query} setQuery={setQuery} />
            <SearchButton navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%'
    },
});

export default SearchSection;
