import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './src/components/Board/Board';
=======
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './src/resources/data.json';
import Boards from './src/components/Boards/Boards';
import ListsView from './src/components/ListsView/ListsView';
import Task from './src/components/Task/Task';
>>>>>>> df97075bed4aba8a1df117e48f90eb5088bd2d29

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
        padding: 20,
=======
        padding: 0,
>>>>>>> df97075bed4aba8a1df117e48f90eb5088bd2d29
    },
});
export default function App() {
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);

    const [currentBoard, setCurrentBoard] = useState();
    const [showBoard, setShowBoard] = useState(false);

    return (
        <View style={styles.container}>
<<<<<<< HEAD
            <Board />
=======
            <Task listId={3} taskdata={tasks} />
            {showBoard
                ? (
                    <ListsView
                        board={currentBoard}
                        setShowBoard={setShowBoard}
                    />
                )

                : (
                    <Boards
                        boards={boards}
                        setBoards={setBoards}
                        setCurrentBoard={setCurrentBoard}
                        setShowBoard={setShowBoard}
                    />
                ) }
>>>>>>> df97075bed4aba8a1df117e48f90eb5088bd2d29
            <StatusBar />
        </View>
    );
}
