import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Board from '../Board/Board';
import styles from './style';
import NavigationBar from '../NavigationBar/NavigationBar';
import AddButton from '../AddButton/AddButton';
import AddBoard from '../AddBoard/AddBoard';

export default function Boards({
    boards, setBoards, setCurrentBoard, setShowBoard,
}) {
    const [addingBoard, setAddingBoard] = useState(false);
    const [id, setId] = useState(4);
    return (
        <>
            <NavigationBar currentPage="Boards" />
            <ScrollView contentContainerStyle={{paddingBottom: 150}}>
                <View style={styles.container}>
                    {boards.map((board) => (
                        <Board
                            boards={boards}
                            board={board}
                            setBoards={setBoards}
                            key={board.id}
                            setCurrentBoard={setCurrentBoard}
                            setShowBoard={setShowBoard}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={styles.addButton}>
                <AddButton
                    onPress={() => setAddingBoard(!addingBoard)}
                />
            </View>
            {addingBoard
                ? (
                    <AddBoard
                        setBoards={setBoards}
                        boards={boards}
                        addingBoard={addingBoard}
                        setAddingBoard={setAddingBoard}
                        prevId={id}
                        setId={setId}
                    />
                )
                : <></>}
        </>
    );
}
