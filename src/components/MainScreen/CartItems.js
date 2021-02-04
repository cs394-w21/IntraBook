import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CartItems = ({ data }) => {
    return (
        <View style={styles.container}>
            {data.length < 1 ? <Text style={styles.cartItem}>Cart is Empty</Text> : 
              data.map(item => 
                <Text style={styles.cartItem}>{item.title}</Text>)}
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
    }
});

export default CartItems;
