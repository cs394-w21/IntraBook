import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

const SearchSection = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <SearchButton navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});

export default SearchSection;
