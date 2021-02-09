import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const MessageButton = ({ navigation, item }) => {
    return (
        <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${item.poster.email}`)
                .then((data) => console.error("then", data))
                .catch((err) => { throw err; })}
            // onPress={() => {
            //     const url = `mailto:${item.poster.email}`;
            //     Linking.openURL(url)
            //         .then((supported) => {
            //             if (supported) {
            //                 return Linking.openURL(url)
            //                     .catch(() => null);
            //             }
            //         });
            // }

            // }
            style={styles.messageButton}
        >
            <Text>
                Email
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
