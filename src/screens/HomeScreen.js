import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchSection from '../components/SearchScreen/SearchSection';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SearchSection navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
