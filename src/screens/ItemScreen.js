import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { firebase } from '../../firebase';
import AddCartButton from '../components/ItemScreen/AddCartButton.js';
import MessageButton from '../components/ItemScreen/MessageButton.js';

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
        .ref('/post_images/' + item.id +'.jpeg') //name in storage in firebase console
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
                <View style={styles.detailContainerRow}>
                    <View style={styles.detailContainer}>
                        <Text style={styles.wordStyle}>
                            <Text style={styles.boldWord}>Author: </Text> 
                            {item.author}
                        </Text>
                        <Text>
                            <Text style={styles.boldWord}>Sold By: </Text> 
                            {item.poster.name}
                            </Text>
                        <Text style={styles.wordStyle}>
                            <Text style={styles.boldWord}>Price: </Text> 
                            ${item.price} 
                        </Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.wordStyle}>
                            <Text style={styles.boldWord}>ISBN: </Text> 
                            {item.isbn}
                        </Text>
                        <Text style={styles.wordStyle}>
                            <Text style={styles.boldWord}>Condition: </Text> 
                            {item.condition}
                        </Text>
                    </View>
                </View>
                <View style={styles.locationView}>
                    <Image source={require('../../assets/location.png')} style= {styles.locationImage}></Image>
                    <Text style={{paddingLeft: 10}}>{item.location}</Text>
                </View>
                <View style={styles.addToCartButton}>
                    <AddCartButton cart={cart} setCart={setCart} item={item} setCartNotif={setCartNotif}/>
                    <MessageButton item={item}/>
                </View>
                {cartNotif ? <Text style={styles.addToCartButtonNotif}>Item added to watchlist</Text> : null}
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
        backgroundColor: '#dedcdc',
    },
    viewContainer: {
        alignContent:'flex-start', 
        flexDirection: 'column', 
        flex:1, 
        alignItems: 'flex-start',
    },
    detailContainer: {
        flexDirection: 'column',
        flex: 1,
        flexWrap: 'wrap',
    },
    detailContainerRow: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    title: {
         fontSize: 25,
         fontFamily: 'Helvetica Neue',
    },
    pic: {
        flexDirection: 'row',
        width: 390,
        resizeMode: 'contain',
        justifyContent: 'flex-start',
        height: 500,
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
        paddingLeft: 70,
    },
    locationView: {
        flexDirection: 'row',
        padding: 15,
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        alignItems: 'center',
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
    wordStyle: {
        padding: 1.5,
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
    },
    boldWord: {
        fontWeight: 'bold',
    },
});

export default ItemScreen;
