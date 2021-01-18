import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const ItemScreen = ({route, navigation}) => {
    const item = route.params.item;
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{item.title}</Text>
            <Image source = {item.pic} style = {styles.pic}></Image>
            <Text>Author: {item.author}</Text>
            <Text>ISBN: {item.isbn}</Text>
            <Text style = {styles.price}>${item.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        marginLeft: '10%',
        marginTop: '10%',
        marginBottom: '10%'
    },
    title: {
        fontSize: 20
    },
    pic: {
        marginTop: '5%',
        width: '70%',
        height: '70%',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    price: {
        marginTop: 10,
        fontSize: 30
    }

});

export default ItemScreen;
