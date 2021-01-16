import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate('SearchResultsScreen')}
        >
            <Text>
                Search
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        padding: 10,
        minWidth: 90,
        maxWidth: 90,
        backgroundColor: '#66b0ff',
    },
});

export default SearchButton;
