import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';
import CartItems from './MainScreen/CartItems';

const Header = ({ displayCart, cart, setDisplayCart, navigation }) => {
    const toggleCart = () => {
        console.log(cart)
        displayCart ? setDisplayCart(false) : setDisplayCart(true)
        console.log(displayCart)
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('SellScreen')} style={styles.sellButton}>
                    <Text >
                        Sell Books
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleCart()} style={styles.cartButton}>
                    <Text>
                        Cart ({cart.length})
                    </Text>
                </TouchableOpacity>
            </View>
            {/* { displayCart ? <CartItems data={cart}/> : null } */}
            {displayCart
            ?
            <Modal
                animationType="slide"
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.cartModal}>
                        <CartItems data={cart} />
                        <TouchableHighlight
                            style={styles.modalStyle}
                            onPress={() => {
                                toggleCart();
                            }}
                        >
                            <Text style={styles.textStyle}>Close Cart</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            :
            null}
        </View>
    );
};

const openButton = {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    top: 10,
};

const styles = StyleSheet.create({
    cartModal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    sellButton: {
        borderRadius: 10, 
        color: "white", 
        backgroundColor: "#fa953c", 
        width: 100, 
        padding: 10, 
        alignItems: "center",
    },
    cartButton: {
        borderRadius: 10, 
        color: "white", 
        backgroundColor: "#66b0ff", 
        width: 100, 
        padding: 10, 
        alignItems: "center",
    },
    modalStyle: {
        ...openButton, 
        backgroundColor: "#2196F3",
    }
});

export default Header;
