import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddCartButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.addCartButton}
        >
            <Text>
                Add to Cart
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addCartButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        padding: 10,
        minWidth: 100,
        maxWidth: 40,
        backgroundColor: '#fa953c',
    },
});

export default AddCartButton;
