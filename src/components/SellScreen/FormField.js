import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const FormField = ({ label, placeholder }) => {

    return (
        <View style={styles.txt}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                // value={query}
                // onChangeText={queryText => setQuery(queryText)}
                placeholder={placeholder}
                placeholderTextColor='grey'
                style={styles.textStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    itemList: {
        margin:'5%',
        backgroundColor: '#dedcdc'
    },
    label: {
        backgroundColor: 'grey',
        padding: 10,
        color: "white",
        fontWeight: "bold"
    }, 
    textStyle: {
        backgroundColor: '#333333', 
        color: 'white', 
        height: 20, 
        padding: 15,
    },
});

export default FormField;
