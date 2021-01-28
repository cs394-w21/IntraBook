import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ItemScreen from '../../screens/ItemScreen';
//require('../../../assets/adaptive-icon.png')

const ResultItem = ({ navigation, item, setCart, displayCart, cart, setDisplayCart}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('ItemScreen', {item, setCart, cart, displayCart, setDisplayCart})}
        >
            <Image
                // source={eval(item.pic)}
                source={{uri: '../../../assets/adaptive-icon.png'}}
                style={styles.image}
            />
            <View>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.author}>{item.author}</Text>
                <Text style = {styles.price}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '15%',
      },
      image: {
        width: 65,
        height: 65,
      },
      author: {
          paddingLeft: 10
      },
      author: {
        paddingLeft: 10
      },
      title: {
          paddingLeft: 10,
      },
      price: {
          paddingLeft: 10
      }

});

export default ResultItem;
