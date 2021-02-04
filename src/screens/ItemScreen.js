import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import AddCartButton from '../components/ItemScreen/AddCartButton.js';
import MessageButton from '../components/ItemScreen/MessageButton.js';
import Header from '../components/Header'
import { firebase } from '../../firebase';

const ItemScreen = ({route, navigation}) => {
    const item = route.params.item;
    const setCart = route.params.setCart;
    const displayCart = route.params.displayCart;
    const cart = route.params.cart;
    const setDisplayCart = route.params.setDisplayCart;
    const [cartNotif, setCartNotif] = useState(false)

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
        <ScrollView contentContainerStyle = {styles.container}>
            <View style={styles.viewContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.bookImageView}>
                    <Image source={{uri:imageUrl}} style = {styles.pic} />
                </View>
                <Text>Author: {item.author}</Text>
                <Text>ISBN: {item.isbn}</Text>
                <Text style={styles.price}>${item.price} ({item.condition})</Text>
                <Text style={{paddingTop: 5}}>Sold by: {item.poster.name}</Text>
                <View style={styles.locationView}>
                    <Image source={require('../../assets/location.png')} style= {styles.locationImages}></Image>
                    <Text style={{paddingLeft: 10}}>{item.location}</Text>
                </View>
                <View style={styles.addToCartButton}>
                    <AddCartButton cart={cart} setCart={setCart} item={item} setCartNotif={setCartNotif}/>
                    <MessageButton/>
                </View>
                {cartNotif ? <Text style={styles.addToCartButtonNotif}>Item added to cart</Text> : null}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: '5%',
        width: '100%',
        backgroundColor: '#dedcdc'
    },
    title: {
        // fontSize: 30,
    },
    pic: {
        flexDirection: 'row',
        width: 390,
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        height: 500
    },
    price: {
        marginTop: 10,
    },
    addToCartButtonNotif: {
        color: "green",
    },
    addToCartButton: {
        flex:1,
        flexDirection: 'row', 
        width:'100%', 
        justifyContent: 'flex-start', 
        marginBottom: 10,
    },
    locationView: {
        flexDirection: 'row',
        padding: 5,
    },
    locationImage: { 
        width: 20, 
        height: 20, 
        resizeMode: 'contain',
    },
    bookImageView: {
        width:'100%', 
        alignItems:'flex-start', 
        alignContent:'flex-start', 
        justifyContent:'flex-start', 
        marginTop: '5%', 
        marginBottom:'5%',
    },
    viewContainer: {
        alignContent:'flex-start', 
        flexDirection: 'column', 
        flex:1, alignItems: 'flex-start',
    },
});

export default ItemScreen;
