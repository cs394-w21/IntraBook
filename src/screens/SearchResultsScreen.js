import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import SearchResults from '../components/ResultsScreen/SearchResults';
import SearchSection from '../components/SearchScreen/SearchSection';
import { firebase } from '../../firebase';


const SearchResultsScreen = ({ navigation }) => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const db = firebase.database().ref();
        db.on('value', snap => {
          if (snap.val()) console.log(snap.val());
        }, error => console.log(error));
      }, []);

    const getResults = () => {
        const formattedQuery = query;
        const filteredData = data.filter(item => contains(item, formattedQuery));
        setResults(filteredData);
    };

    const contains = (item, query) => {
        if (!query) return false;
        const { author, title, isbn, condition } = item;
        if (author.includes(query) || title.includes(query) || isbn.toString().includes(query) || condition.includes(query)) {
          return true;
        } else {
            return false;
        }
    };

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <SearchSection getResults={getResults} query={query} setQuery={setQuery} />
                {query ? <SearchResults navigation={navigation} results={results} /> : null}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 20,
    },
});

export default SearchResultsScreen;
