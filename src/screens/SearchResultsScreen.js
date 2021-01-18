import React from 'react';
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import SearchSection from '../components/SearchScreen/SearchSection';
import ResultItem from '../components/ResultsScreen/ResultItem';
import { color } from 'react-native-reanimated';


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
},
{
    id: 7,
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
    id: 8,
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
];

const SearchResultsScreen = ({ navigation }) => {

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
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
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    itemList: {
        marginLeft:'3%',
        marginRight:'3%',
        marginTop: '0%',
        paddingRight: '5%',
        marginBottom: '25%',
        backgroundColor: 'white'
    }
});

export default SearchResultsScreen;
