import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import FormField from '../components/SellScreen/FormField'

const SellScreen = ({ navigation }) => {
   
    return (
        <View>
            <FormField label={'Title'} placeholder={'Enter Name of Book'}/>
            <FormField label={''} placeholder={'Name'}/>
            <FormField label={'Name'} placeholder={'Name'}/>
            <FormField label={'Name'} placeholder={'Name'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        marginTop: 20,
        alignItems: "center"
    },
});

export default SellScreen;
