import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ResultItem from './ResultItem';


const SearchResults = ({ navigation, results }) => {
    return (
        <FlatList
                style={styles.itemList}
                data={results}
                keyExtractor={ item => item.id.toString() }
                renderItem={({item}) => (
                    <ResultItem navigation={navigation} item={item} />
                )}
        />
    );
};

const styles = StyleSheet.create({
    itemList: {
        marginLeft:'3%',
        marginRight:'3%',
        marginTop: '0%',
        paddingRight: '5%',
        marginBottom: '25%',
        backgroundColor: 'white'
    },
});

export default SearchResults;
