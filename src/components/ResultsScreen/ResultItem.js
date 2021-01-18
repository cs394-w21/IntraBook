import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import ItemScreen from '../../screens/ItemScreen';

const ResultItem = ({ navigation, item }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('ItemScreen', {item})}
        >
            <Image
                source = {item.pic}
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
          paddingLeft: 10
      },
      price: {
          paddingLeft: 10
      }

});

export default ResultItem;
