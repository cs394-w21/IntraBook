import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const SearchButton = ({ getResults }) => {
    return (
        <TouchableOpacity
            style={styles.searchButton}
            onPress={() => getResults()}
        >
            <Text style={styles.txt}>
                GO
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 50,
        padding: 10,
        width: 50,
        backgroundColor: '#66b0ff',
        left: 11,
    },
    txt: {
        fontWeight: 'bold',
    }
});

export default SearchButton;
