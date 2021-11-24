import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'blue',
        width: '100%',
    },
});

export default function Board() {
    return (
        <View style={styles.container}>
            <Text> Hello </Text>
        </View>
    );
}
