import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import data from './src/resources/data.json';
import Boards from './src/components/Boards/Boards';
import ListsView from './src/components/ListsView/ListsView';
import Task from './src/components/Task/Task';

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

    const [currentBoard, setCurrentBoard] = useState();
    const [showBoard, setShowBoard] = useState(false);

    return (
        <View style={styles.container}>
            {/* <Task listId={3} taskdata={tasks} /> */}
            {showBoard
                ? (
                    <ListsView
                        board={currentBoard}
                        setShowBoard={setShowBoard}
                        data={data}
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
            <StatusBar />
        </View>
    );
}
