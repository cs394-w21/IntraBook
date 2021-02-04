import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../../../firebase';

const ResultItem = ({ navigation, item, setCart, displayCart, cart, setDisplayCart}) => {
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
            <View>
                <Image style={styles.image} source={{uri: imageUrl}} />
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.condition}>{item.condition}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: '1.5%',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderRadius: 5,
      },
      item: {
        //padding: '1%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '75%',
        padding: 5,
      },
      image: {
        height: 80,
        width: 80,
      },

});

export default ResultItem;
