import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchSection from '../components/SearchScreen/SearchSection';
import ResultItem from '../components/ResultsScreen/ResultItem';


const SearchResultsScreen = () => {

    const data = [{
            id: 0,
            author: "James Avery",
            title: "Organic Chemistry",
            isbn: 12343212312
        },
        {
            id: 1,
            author: "Jessica Avery",
            title: "Organic Chemistry",
            isbn: 12343212312
        }
    ]

    return (
        <View>
            <SearchSection/>

            <FlatList 
                data={data}
                keyExtractor={item => item.id }
                renderItem={({item}) => (
                    <ResultItem item={item} />
                )}
            />

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

export default SearchResultsScreen;
