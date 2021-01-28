import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../../../firebase';


const ResultItem = ({ navigation, item, setCart, displayCart, cart, setDisplayCart}) => {
    // const ref = firebase.storage().ref('/'+item.isbn+'.jpg');
    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        firebase.storage()
        .ref('/' + item.isbn+'.jpg') //name in storage in firebase console
        .getDownloadURL()
        .then((url) => {
            setImageUrl(url);
        })
        .catch((e) => console.log('Errors while downloading => ', e));
    }, []);
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('ItemScreen', {item, setCart, cart, displayCart, setDisplayCart})}
        >
            <Image style={{height: 50, width: 50}} source={{uri: imageUrl}} />
            <View>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.author}>{item.author}</Text>
                <Text style = {styles.price}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    );
    
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '15%',
      },
      image: {
        width: 65,
        height: 65,
      },
      author: {
          paddingLeft: 10
      },
      author: {
        paddingLeft: 10
      },
      title: {
          paddingLeft: 10,
      },
      price: {
          paddingLeft: 10
      }

});

export default ResultItem;
