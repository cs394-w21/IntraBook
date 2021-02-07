import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { firebase } from '../../firebase';
import FormField from '../components/SellScreen/FormField';

// var uuid = require('react-native-uuid');

const SellScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        author: "",
        condition: "",
        id: "",
        isbn: 0,
        location: "",
        pic: "",
        poster: {
          email: "",
          name: "",
          phone: ""
        },
        price: 0,
        title: ""
    });
    const db = firebase.database().ref('/data');

    const generateUUID = () => { // Public Domain/MIT
      var d = new Date().getTime();//Timestamp
      var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16;//random number between 0 and 16
          if(d > 0){//Use timestamp until depleted
              r = (d + r)%16 | 0;
              d = Math.floor(d/16);
          } else {//Use microseconds since page-load if supported
              r = (d2 + r)%16 | 0;
              d2 = Math.floor(d2/16);
          }
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    };  

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

    const handleSumbit = async () => {
      const id = generateUUID();
      let newData = {...data};
      newData['id'] = id;
      setData(newData);

      const path = `post_images/${id}.jpeg`;
      const metadata = {
          contentType: 'image/jpeg',
      };

      db.push(newData);

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

    return (
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <FormField label={'Your Full Name'} placeholder={'First Last'} data={data} setData={setData} name={'name'}/>
            <FormField label={'Your Email'} placeholder={'example@you.edu'} data={data} setData={setData} name={'email'}/>
            <FormField label={'Book Title'} placeholder={'Title'} data={data} setData={setData} name={'title'}/>
            <FormField label={'Book Author'} placeholder={'Author'} data={data} setData={setData} name={'author'}/>
            <FormField label={'ISBN'} placeholder={'ISBN'} data={data} setData={setData} name={'isbn'}/>
            <FormField label={'Book Price'} placeholder={'Price'} data={data} setData={setData} name={'price'}/>
            <FormField label={'Condition'} placeholder={'Condition'} data={data} setData={setData} name={'condition'}/>
            <FormField label={'Location'} placeholder={'Pick-up Location'} data={data} setData={setData} name={'location'}/>
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
