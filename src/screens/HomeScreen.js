import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { set } from 'react-native-reanimated';
import SearchSection from '../components/SearchScreen/SearchSection';


const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');

    return (
        <ImageBackground source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <SearchSection navigation={navigation} query={query} setQuery={setQuery} /> 
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
        flex:1,
    },
});

export default HomeScreen;
