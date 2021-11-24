import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Board from '../Board/Board';
import styles from './style';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function Boards({ boards, setBoards}) {
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
        </>
    );
}
