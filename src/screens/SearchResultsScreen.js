import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import SearchResults from '../components/ResultsScreen/SearchResults';
import SearchSection from '../components/SearchScreen/SearchSection';
import Header from '../components/Header'
import { firebase } from '../../firebase';



const SearchResultsScreen = ({ navigation }) => {
    const [cart, setCart] = useState([])
    const [displayCart, setDisplayCart] = useState(false)
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    // const data2 = [{
    //     id: 0,
    //     author: "David R. Klein",
    //     title: "Organic Chemistry as a Second Language: First Semester Topics, Fifth Edition 5th Edition",
    //     isbn: 12343212312,
    //     price: 29.00,
    //     pic: require('../../assets/organic_chemistry_3.jpg'),
    //     location: 'Evanston Campus, Northwestern University',
    //     condition: 'Good',
    //         poster: {
    //         name: 'John Shepherd',
    //         email: 'student1@u.northwestern',
    //         phone: ''
    //     }
    // },
    // {
    //     id: 1,
    //     author: "Arthur Winter",
    //     title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    //     isbn: 12343212312,
    //     price: 60.00,
    //     pic: require('../../assets/organic_chemistry_4.jpg'),
    //     location: 'Evanston Campus, Northwestern University',
    //     condition: 'Mint',
    //     poster: {
    //         name: 'John Shepherd',
    //         email: 'student1@u.northwestern',
    //         phone: ''
    //     }
    // },
    // {
    //     id: 2,
    //     author: "Arthur Winter",
    //     title: "Organic Chemistry I For Dummies (For Dummies (Lifestyle)) 2nd Edition",
    //     isbn: 12343212312,
    //     price: 60.00,
    //     pic: require('../../assets/organic_chemistry_4.jpg'),
    //     location: 'Evanston Campus, Northwestern University',
    //     condition: 'Mint',
    //     poster: {
    //         name: 'John Shepherd',
    //         email: 'student1@u.northwestern',
    //         phone: ''
    //     }
    // }];

    const db = firebase.database().ref();
    const storage = firebase.storage().ref();

    useEffect(() => {
        const handleData = snap => {
          if (snap.val())
            {   console.log(snap.val().data[0])
                
                setData(snap.val().data);
                //setCart(snap.val().data)
            }
        }
        db.on('value', handleData, error => alert(error));
        return () => { db.off('value', handleData); };
      }, []);


    const getResults = () => {
        const formattedQuery = query.toLowerCase();
        const filteredData = data.filter(item => contains(item, formattedQuery));
        setResults(filteredData);
    };

    const contains = (item, query) => {
        if (!query) return false;
        const { author, title, isbn, condition } = item;
        if (author.toLowerCase().includes(query) || title.toLowerCase().includes(query) || isbn.toString().includes(query) || condition.toLowerCase().includes(query)) {
          return true;
        } else {
            return false;
        }
    };
    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>

            <View style={styles.container}>
                <Header displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart}/>
                <SearchSection getResults={getResults} query={query} setQuery={setQuery} />
                {results.length > 0 ? <SearchResults displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} navigation={navigation} results={results} setCart={setCart}/> : null}
                {/* <TouchableOpacity style={{borderRadius: 10, color: "white", backgroundColor: "#66b0ff", width: 100, padding: 10, alignItems: "center"}}>
                    Sell Books
                </TouchableOpacity> */}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'Column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default SearchResultsScreen;
