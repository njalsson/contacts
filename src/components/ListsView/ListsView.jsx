import React from 'react';
import { View, Text, Button } from 'react-native';

import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './style';
import List from '../List/List';

export default function ListsView({
    board, setShowBoard, data,
}) {
    return (
        <>
            <NavigationBar
                currentPage={board.name}
            >
                <Button color="white" title="back" onPress={() => setShowBoard(false)} />
            </NavigationBar>
            <View style={styles.container}>
                <Text>Here are the lists</Text>
                {data.lists.map((lis) => (<List boardId={lis.boardId} listdata={data} />))}
                {/* // <List boardId={board.id} listdata={data} /> */}
            </View>
        </>
    );
}
