import React from 'react';
import { StyleSheet, View } from 'react-native';
import {TextInput, Text} from 'react-native-web';


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
                style={{ backgroundColor: '#333333', color: 'white', height: 20, padding: 15 }}/>
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
    }
});

export default FormField;
