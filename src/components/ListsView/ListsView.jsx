import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './style';
import List from '../List/List';

export default function ListsView({
    board, setShowBoard, lists, setLists, tasks, setTasks,
}) {
    const test = lists.filter((list) => list.boardId === board.id);
    return (
        <>
            <NavigationBar
                currentPage={board.name}
            >
                <Button color="white" title="back" onPress={() => setShowBoard(false)} />
            </NavigationBar>
            <ScrollView>
                <View style={styles.container}>
                    {test.map((lis) => (
                        <List
                            list={lis}
                            lists={lists}
                            key={lis.id}
                            setLists={setLists}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    ))}
                    {/* // <List boardId={board.id} listdata={data} /> */}
                </View>
            </ScrollView>
        </>
    );
}
