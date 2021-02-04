import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import FormField from '../components/SellScreen/FormField'

const SellScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container1}>
            <FormField label={'Your Full Name'} placeholder={'First, Last'}/>
            <FormField label={'Your Email'} placeholder={'YourEmail@you.edu'}/>
            <FormField label={'Book Title'} placeholder={'Title'}/>
            <FormField label={'Book Author'} placeholder={'Author'}/>
            <FormField label={'ISBN'} placeholder={'ISBN'}/>
            <FormField label={'Book Price'} placeholder={'Price'}/>
            <FormField label={'LOCATION?'} placeholder={''}/>
            <FormField label={'PIC_UPLOAD'} placeholder={''}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        marginTop: 20,
        alignItems: "center",
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        bottom: 20,
    },
    errorMsg: {
        marginBottom: 20,
        height: 17.5,
    },
});

export default SellScreen;
