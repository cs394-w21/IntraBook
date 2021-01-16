import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ResultItem = ({ navigation, item }) => {
    return (
        <View style={styles.container}>
            <Text>{item.author}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});

export default ResultItem;
