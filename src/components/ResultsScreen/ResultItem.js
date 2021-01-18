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
                <Text>      {item.author}</Text>
                <Text>      {item.title}</Text>
                <Text>      {item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
      },
      image: {
        width: 65,
        height: 65,
      },
});

export default ResultItem;
