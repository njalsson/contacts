import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './src/components/Board/Board';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <Board />
            <StatusBar />
        </View>
    );
}
