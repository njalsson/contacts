import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Board from '../Board/Board';
import styles from './style';
import NavigationBar from '../NavigationBar/NavigationBar';
import AddButton from '../AddButton/AddButton';
import AddBoard from '../AddBoard/AddBoard';

export default function Boards({ boards, setBoards }) {
    const [addingBoard, setAddingBoard] = useState(false);
    const [id, setId] = useState(4);
    return (
        <>
            <NavigationBar currentPage="Boards" />
            <ScrollView>
                <View style={styles.container}>
                    {boards.map((board) => (
                        <Board
                            boards={boards}
                            {...board}
                            setBoards={setBoards}
                            key={board.id}
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
