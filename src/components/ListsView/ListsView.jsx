import React from 'react';
import { View, Text, Button } from 'react-native';

import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './style';
import List from '../List/List';

export default function ListsView({
    board, setShowBoard, data,
}) {
    const test = data.lists.filter((list) => list.boardId === board.id);
    return (
        <>
            <NavigationBar
                currentPage={board.name}
            >
                <Button color="white" title="back" onPress={() => setShowBoard(false)} />
            </NavigationBar>
            <View style={styles.container}>
                <Text>Here are the lists</Text>
                {test.map((lis) => (
                    <>
                        <Text style={styles.listHeader}>
                            {lis.id}
                            .&nbsp;
                            {lis.name}

                        </Text>
                        <List list={lis} listdata={data} />
                    </>
                ))}
                {/* // <List boardId={board.id} listdata={data} /> */}
            </View>
        </>
    );
}
