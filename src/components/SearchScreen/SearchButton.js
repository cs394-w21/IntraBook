import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const SearchButton = ({ navigation, query, setQuery  }) => {
    return (
        <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate('SearchResultsScreen', {query, setQuery})}
        >
            <Text>
                Go
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
        height: 40,
        padding: 10,
        minWidth: 40,
        maxWidth: 40,
        backgroundColor: '#66b0ff',
    },
});

export default SearchButton;
