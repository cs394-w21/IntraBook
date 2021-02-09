import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { firebase } from '../../../firebase';

const CartItem = ({ item, setCart, cart }) => {
    const [imageUrl, setImageUrl] = useState(undefined);

    const removeItem = () => {
        setCart(cart.filter(elem => item != elem))
    }

    useEffect(() => {
        firebase.storage()
        .ref('/post_images/' + item.id + '.jpeg') //name in storage in firebase console
        .getDownloadURL()
        .then((url) => {
            setImageUrl(url);
        })
        .catch((e) => console.log('Errors while downloading => ', e));
    }, []);

    return (
        <View style={styles.menuWrap}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.cartItem}>{item.title}</Text>
            <TouchableOpacity
                onPress={() => removeItem()}>
                <Icon
                    name='trash'
                    type='font-awesome'
                    color='#f50'
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        padding: 5,
        backgroundColor: "white"
    },
    cartItem: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        width: '60%',
    },
    menuWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: 10,
    },
    image: {
        height: 80,
        width: '20%',
    },
});

export default CartItem;
