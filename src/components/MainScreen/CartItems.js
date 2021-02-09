import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CartItem from './CartItem';

const CartItems = ({ data, setCart }) => {
   
    return (
        <View style={styles.container}>
            {data.length < 1 ? <Text style={styles.cartItem}>Watchlist is empty</Text> : 
              data.map(item => 
                <CartItem item={item} setCart={setCart} cart={data}/>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 276,
        padding: 5,
        backgroundColor: "white"
    },
    cartItem: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
        fontWeight: 'bold',
    },
    menuWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    }
});

export default CartItems;
