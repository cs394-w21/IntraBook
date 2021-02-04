import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import SearchResults from '../components/ResultsScreen/SearchResults';
import SearchSection from '../components/SearchScreen/SearchSection';
import Header from '../components/Header'
import { firebase } from '../../firebase';


const MainScreen = ({ navigation }) => {
    const [cart, setCart] = useState([])
    const [displayCart, setDisplayCart] = useState(false)
    const [data, setData] = useState([]);
    const [results, setResults] = useState(null);
    const [query, setQuery] = useState('');

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
                <Header displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} />
                <SearchSection getResults={getResults} query={query} setQuery={setQuery} />
                {results ? <SearchResults displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} navigation={navigation} results={results} setCart={setCart} /> : null}
                <TouchableOpacity style={{borderRadius: 10, color: "white", backgroundColor: "#66b0ff", width: 100, padding: 10, alignItems: "center"}}>
                    <Text>
                        Sell Books
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default MainScreen;
