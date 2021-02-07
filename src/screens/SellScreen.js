// import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import FormField from '../components/SellScreen/FormField';
import nextId from "react-id-generator";
import { firebase } from '../../firebase';

import ImagePicker from 'react-native-image-picker';




const SellScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const id = nextId();
    console.log(typeof image);

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
          base64: true,
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

      const handleSumbit = async (image) => {
          
        const path = `post_images/${id}.jpeg`;
        const metadata = {
            contentType: 'image/jpeg',
          };
          
        return new Promise(async (res, rej) => {
          const response = await fetch(image);
          const file = await response.blob();
          const upload = firebase.storage().ref(path).put(file, metadata);
          upload.on(
            "state_changed",
            (snapshot) => {},
            (err) => {
              rej(err);
            },
            async () => {
              const url = await upload.snapshot.ref.getDownloadURL();
              res(url);
            }
          );
        });
      };
    

      const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        firebase.storage()
        .ref(`post_images/${id}.jpg`) //name in storage in firebase console
        .getDownloadURL()
        .then((url) => {
            setImageUrl(url);
        })
        .catch((e) => console.log('Errors while downloading => ', e));
    }, []);

    // const handleSumbit = () => {
    //     firebase
    //     .storage()
    //     .ref('/'+{id}+'.jpg')
    //     .put(image)
    //     .then((snapshot) => {
    //         //You can check the image is now uploaded in the storage bucket
    //         console.log(`${imageName} has been successfully uploaded.`);
    //     })
    //     .catch((e) => console.log('uploading image error => ', e));
    // }

    // const [image, setImage] = useState(null);
    // const [uploading, setUploading] = useState(false);
    // const [transferred, setTransferred] = useState(0);

    // const selectImage = () => {
    //     const options = {
    //       maxWidth: 2000,
    //       maxHeight: 2000,
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images'
    //       }
    //     };
    //     ImagePicker.showImagePicker(options, response => {
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         const source = { uri: response.uri };
    //         console.log(source);
    //         setImage(source);
    //       }
    //     });
    //   };

    //   const uploadImage = async () => {
    //     const { uri } = image;
    //     const filename = uri.substring(uri.lastIndexOf('/') + 1);
    //     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    //     setUploading(true);
    //     setTransferred(0);
    //     const task = firebase.storage()
    //       .ref(filename)
    //       .putFile(uploadUri);
    //     // set progress state
    //     task.on('state_changed', snapshot => {
    //       setTransferred(
    //         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    //       );
    //     });
    //     try {
    //       await task;
    //     } catch (e) {
    //       console.error(e);
    //     }
    //     setUploading(false);
    //     Alert.alert(
    //       'Photo uploaded!',
    //       'Your photo has been uploaded to Firebase Cloud Storage!'
    //     );
    //     setImage(null);
    //   };



    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <FormField label={'Your Full Name'} placeholder={'First Last'}/>
            <FormField label={'Your Email'} placeholder={'example@you.edu'}/>
            <FormField label={'Book Title'} placeholder={'Title'}/>
            <FormField label={'Book Author'} placeholder={'Author'}/>
            <FormField label={'ISBN'} placeholder={'ISBN'}/>
            <FormField label={'Book Price'} placeholder={'Price'}/>
            <FormField label={'Location'} placeholder={'Pick-up Location'}/>
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
            <TouchableOpacity style={styles.submitButton} onPress={handleSumbit}> 
                <Text style={styles.submitText}>
                    Submit
                </ Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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
        marginBottom: 50
    },
    submitText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SellScreen;
