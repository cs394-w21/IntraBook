import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MessageButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.messageButton}
        >
            <Text>
                Message
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    messageButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        padding: 10,
        minWidth: 100,
        maxWidth: 40,
        backgroundColor: '#66b0ff',
    },
});

export default MessageButton;
