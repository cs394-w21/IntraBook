import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import FormField from '../components/SellScreen/FormField'
import { Icon } from 'react-native-elements'

const SellScreen = ({ navigation }) => {
   
    return (
        <View style={styles.container1}>
            <FormField label={'Your Full Name'} placeholder={'First Last'}/>
            <FormField label={'Your Email'} placeholder={'example@you.edu'}/>
            <FormField label={'Book Title'} placeholder={'Title'}/>
            <FormField label={'Book Author'} placeholder={'Author'}/>
            <FormField label={'ISBN'} placeholder={'ISBN'}/>
            <FormField label={'Book Price'} placeholder={'Price'}/>
            <FormField label={'Location'} placeholder={'Pick-up Location'}/>
            {/* <FormField label={'PIC_UPLOAD'} placeholder={''}/> */}
            <Text>
                Book Image
            </Text>
            <TouchableOpacity style={styles.picButton}> 
                <Icon
                    name='camera'
                    type='font-awesome'
                    color='#f50'
                />
            </TouchableOpacity>
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
    picButton: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SellScreen;
