import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import AddCartButton from '../components/ItemScreen/AddCartButton.js';
import MessageButton from '../components/ItemScreen/MessageButton.js';

const ItemScreen = ({route, navigation}) => {
    const item = route.params.item;
    return (
        <ScrollView style = {styles.container}>
            <Text style = {styles.title}>{item.title}</Text>
            <Image source = {item.pic} style = {styles.pic}></Image>
            <Text>Author: {item.author}</Text>
            <Text>ISBN: {item.isbn}</Text>
            <Text style = {styles.price}>${item.price} ({item.condition})</Text>
            <Text style = {{paddingTop: 5}}>Sold by: {item.poster.name}</Text>
            <View style ={{flexDirection: 'row', padding: 5}}>
                <Image source={require('../../assets/location.png')} style= {{ width: 20, height: 20, resizeMode: 'contain'}}></Image>
                <Text style={{paddingLeft: 10}}>{item.location}</Text>
            </View>
            <View style = {{
                flexDirection: 'row', width:'60%', justifyContent: 'space-evenly', marginBottom: '20%'}}>
                <AddCartButton/>
                <MessageButton/>
            </View>
            
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
