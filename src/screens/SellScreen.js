import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Platform, Image } from 'react-native';
import FormField from '../components/SellScreen/FormField'
import { Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';

const SellScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    //   const [imageUrl, setImageUrl] = useState(undefined);

    // useEffect(() => {
    //     firebase.storage()
    //     .ref('/' + item.isbn+'.jpg') //name in storage in firebase console
    //     .getDownloadURL()
    //     .then((url) => {
    //         setImageUrl(url);
    //     })
    //     .catch((e) => console.log('Errors while downloading => ', e));
    // }, []);

      
   
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
            <TouchableOpacity style={styles.picButton} onPress={pickImage}> 
                <Icon
                    name='camera'
                    type='font-awesome'
                    color='#f50'
                />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity style={styles.submitButton} onPress={() => console.log(image)}> 
                <Text style={styles.submitText}>
                    Submit
                </ Text>
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
        width: 65,
        height: 65,
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
    submitButton: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#66b0ff',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        width: 300,
        elevation: 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 80,
        top: 20,
        borderRadius: 5,
    },
    submitText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SellScreen;
