import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { set } from 'react-native-reanimated';
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
        <ScrollView style = {styles.container}>
            {/* <Header displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart}/> */}
            <Text style = {styles.title}>{item.title}</Text>
            <Image source = {{uri:imageUrl}} style = {styles.pic} />
            <Text>Author: {item.author}</Text>
            <Text>ISBN: {item.isbn}</Text>
            <Text style = {styles.price}>${item.price} ({item.condition})</Text>
            <Text style = {{paddingTop: 5}}>Sold by: {item.poster.name}</Text>
            <View style ={{flexDirection: 'row', padding: 5}}>
                <Image source={require('../../assets/location.png')} style= {{ width: 20, height: 20, resizeMode: 'contain'}}></Image>
                <Text style={{paddingLeft: 10}}>{item.location}</Text>
            </View>
            <View style = {{
                flexDirection: 'row', width:'60%', justifyContent: 'space-evenly', marginBottom: 10}}>
                <AddCartButton cart={cart} setCart={setCart} item={item} setCartNotif={setCartNotif}/>
                <MessageButton/>
            </View>
            {cartNotif ? <Text style={{color: "green"}}>item added to cart</Text> : null}
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: '10%',
    },
    title: {
        fontSize: 25
    },
    pic: {
        resizeMode:'contain',
        width: '100%',
    },
    price: {
        marginTop: 10,
        fontSize: 30
    }
});

export default ItemScreen;
