import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const FormField = ({ label, placeholder, name, setData, data }) => {
    const handleField = (text) => {
        let newData = {...data}
        if (name == 'name' || name == 'phone' || name == 'email') {
            newData.poster[name] = text;
        } else {
            newData[name] = text;
        }
        setData(newData)
    };
    
    return (
        <View style={styles.inputContainer}>
            <Text >
                {label}
            </Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={text => handleField(text)}
                placeholder={placeholder}
                placeholderTextColor='grey'
                style={styles.input}/>
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
    input: {
        height: 40,
        width: 300,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        borderRadius: 5,
        top: 5,
    },
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    error: {
        textAlign: 'center', 
        height: 17.5,
    },
});

export default FormField;
