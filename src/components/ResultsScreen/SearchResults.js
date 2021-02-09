import React from 'react';
import { FlatList, StyleSheet, Text, ScrollView, View } from 'react-native';
import ResultItem from './ResultItem';

const SearchResults = ({ navigation, results, setCart, displayCart, cart, setDisplayCart }) => {
    console.log(results);

    return (
        (results.length == 0)
        ?
        <Text style={styles.txt}>
            No Results
        </Text>
        :
        <View style={styles.flatListStyle}>
            <FlatList
                    style={styles.itemList}
                    data={results}
                    keyExtractor={ item => item.id.toString() }
                    renderItem={({item}) => (
                        <ResultItem navigation={navigation} item={item} setCart={setCart} displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} />
                    )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemList: {
        margin:'5%',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
    },
    txt: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    flatListStyle: {
        marginBottom: '100%',
    }
});

export default SearchResults;
