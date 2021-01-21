import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
var filter = require('lodash.filter');
import SearchResults from '../components/ResultsScreen/SearchResults';
import SearchSection from '../components/SearchScreen/SearchSection';


const data = [{
    id: 0,
    author: "David R. Klein",
    title: "Organic Chemistry as a Second Language: First Semester Topics, Fifth Edition 5th Edition",
    isbn: 12343212312,
    price: 29.00,
    pic: require('../../assets/organic_chemistry_3.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Good',
        poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 1,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 2,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 3,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 4,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 5,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
},
{
    id: 6,
    author: "Arthur Winter",
    title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    isbn: 12343212312,
    price: 60.00,
    pic: require('../../assets/organic_chemistry_4.jpg'),
    location: 'Evanston Campus, Northwestern University',
    condition: 'Mint',
    poster: {
        name: 'John Shepherd',
        email: 'student1@u.northwestern',
        phone: ''
    }
}];

const SearchResultsScreen = ({ route, navigation }) => {
    const setQuery = route.params.setQuery
    var query = route.params.query
    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults();
    }, []);

    const getResults = () => {
        const formattedQuery = query
        const filteredData = data.filter(item => 
          contains(item, formattedQuery)
        );
        console.log(filteredData)
        setResults(filteredData);
    };

    const contains = (item, query) => {
        console.log(query)
        const { author, title, isbn, condition } = item;
        console.log(title, title.includes(query))
        if (author.includes(query) || title.includes(query) || isbn.toString().includes(query) || condition.includes(query)) {
          return true;
        }
        return false;
    };

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <SearchSection navigation={navigation} query={query} setQuery={setQuery} />
            <SearchResults navigation={navigation} results={results} />
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default SearchResultsScreen;
