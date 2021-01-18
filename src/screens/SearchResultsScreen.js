import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchSection from '../components/SearchScreen/SearchSection';
import ResultItem from '../components/ResultsScreen/ResultItem';


const SearchResultsScreen = ({ navigation }) => {

    const data = [{
            id: 0,
            author: "Girijesh Dubey",
            title: "Organic Chemistry",
            isbn: 12343212312,
            price: 55.00,
            pic: require('../../assets/organic_chemistry_1.jpg')
        },
        {
            id: 1,
            author: "Jonathan Clayden",
            title: "Organic Chemistry",
            isbn: 12343212312,
            price: 2000.00,
            pic: require('../../assets/organic_chemistry_2.jpg')
        },
    ];

    return (
        <View style={styles.container}>
            <SearchSection/>
            <FlatList
                style = {styles.itemList}
                data={data}
                keyExtractor={item => item.id.toString() }
                renderItem={({item}) => (
                    <ResultItem navigation={navigation} item={item} />
                )}
            />        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '-25%',
        flex: 1
    },
    itemList: {
        marginLeft: '10%'
    }
});

export default SearchResultsScreen;
