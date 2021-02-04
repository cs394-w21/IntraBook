import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import ResultItem from './ResultItem';

const SearchResults = ({ navigation, results, setCart, displayCart, cart, setDisplayCart }) => {
    console.log(results);

    return (
        (results.length == 0)
        ?
        <Text style={styles.txt}>
            Zero. Absolutely none.
        </Text>
        :
        <FlatList
                style={styles.itemList}
                data={results}
                keyExtractor={ item => item.id.toString() }
                renderItem={({item}) => (
                    <ResultItem navigation={navigation} item={item} setCart={setCart} displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} />
                )}
        />
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
    }
});

export default SearchResults;
