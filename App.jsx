import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< Updated upstream
=======
import Task from './src/components/Task';
>>>>>>> Stashed changes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
function App() {
    return (
        <View style={styles.container}>
<<<<<<< Updated upstream
            <Text>Open up App.js to start working on your app!</Text>
=======
            <Text>Open up App.js to start working on your app my arse!
            <Task />
            </Text>
>>>>>>> Stashed changes
            <StatusBar />
        </View>
    );
}

export default App;
