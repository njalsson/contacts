/* eslint-disable import/no-unresolved */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Task from './src/components/Task/Task';
import Task from './src/components/Task/Task';

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
            <Text>  TASKS:</Text>
            {/* <Text>
                Open up App.js to start working on your app my arse!
                <Task />
            </Text> */}
            <Task />
            <StatusBar />
        </View>
    );
}

export default App;
