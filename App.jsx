import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Task from './src/components/Task';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app my!
            </Text>
            <StatusBar />
        </View>
    );
}
