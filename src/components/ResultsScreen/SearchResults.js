import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ResultItem from './ResultItem';


const SearchResults = ({ navigation, results, setCart, displayCart, cart, setDisplayCart }) => {
    return (
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
        backgroundColor: '#dedcdc'
    },
});

export default SearchResults;
