import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchSection from '../components/SearchScreen/SearchSection';
import ResultItem from '../components/ResultsScreen/ResultItem';


const SearchResultsScreen = ({ navigation }) => {

    const data = [{
            id: 0,
            author: "James Avery",
            title: "Organic Chemistry",
            isbn: 12343212312,
            price: 55.00,
        },
        {
            id: 1,
            author: "Jessica Avery",
            title: "Organic Chemistry",
            isbn: 12343212312,
            price: 2000.00,
        },
    ];

    return (
        <View style={styles.container}>
            <SearchSection/>
            <FlatList 
                data={data}
                keyExtractor={item => item.id }
                renderItem={({item}) => (
                    <ResultItem navigation={navigation} item={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: -100,
        // justifyContent: 'center',
        // paddingTop: 10,
    },
});

export default SearchResultsScreen;
