import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './src/resources/data.json';
import Boards from './src/components/Boards/Boards';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
});
export default function App() {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    console.log(boards);
    return (
        <View style={styles.container}>
            <Boards boards={boards} setBoards={setBoards} />
            <StatusBar />
        </View>
    );
}
