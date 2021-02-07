import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { firebase } from '../../firebase';
import Header from '../components/Header';
import SearchSection from '../components/MainScreen/SearchSection';
import SearchResults from '../components/ResultsScreen/SearchResults';


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
        const filteredData = Object.values(data).filter(item => contains(item, formattedQuery));
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
        <ImageBackground source={require('../../assets/background.png')} style={styles.mainContainer}>
            <View style={styles.container}>
                <Header navigation={navigation} displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} />
                <View style={styles.bodyContainer}>
                    <SearchSection getResults={getResults} query={query} setQuery={setQuery} />
                    {results ? <SearchResults displayCart={displayCart} cart={cart} setDisplayCart={setDisplayCart} navigation={navigation} results={results} setCart={setCart} /> : null}
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: '5%'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mainContainer: {
        width: '100%', 
        height: '100%',
    },
    bodyContainer: {
        top: 20
    }
});

export default MainScreen;
