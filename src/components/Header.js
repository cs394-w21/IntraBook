import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import CartItems from './SearchScreen/CartItems';

const Header = ({ displayCart, cart, setDisplayCart }) => {
    const toggleCart = () => {
        console.log(cart)
        displayCart ? setDisplayCart(false) : setDisplayCart(true)
        console.log(displayCart)
    }

    return (
        <View  style={styles.container}>
        <TouchableOpacity onPress={() => toggleCart()} style={{borderRadius: 10, color: "white", backgroundColor: "#66b0ff", width: 100, padding: 10, alignItems: "center"}}>
            <Text>
                Cart ({cart.length})
            </Text>
        </TouchableOpacity>
            { displayCart ? <CartItems data={cart}/> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        margin: '3%'
    },
});

export default Header;
