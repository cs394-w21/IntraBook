import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ResultItem = ({ navigation, item }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('ItemScreen')}
        >
            <Image
                source={require('../../../assets/favicon.png')}
                style={styles.image}
            />
            <View>
                <Text>{item.author}</Text>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
      },
      image: {
        width: 65,
        height: 65,
        borderRadius: 50,
      },
});

export default ResultItem;
