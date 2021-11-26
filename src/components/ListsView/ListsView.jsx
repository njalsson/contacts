
import React, { useState } from 'react';
import { View, Button, ScrollView } from 'react-native';


import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './style';
import List from '../List/List';
import AddButton from '../AddButton/AddButton';
import AddList from '../AddList/AddList';

export default function ListsView({
    board, setShowBoard, lists, setLists, tasks, setTasks,
}) {
    const test = lists.filter((list) => list.boardId === board.id);
    const [addList, setAddList] = useState(false);
    return (
        <>
            <NavigationBar
                currentPage={board.name}
            >
                <View style={styles.backbutton}>
                    {/* button color fixes a bug on android/web
                     where the button gets a white overlay and is unreadable */}
                    <Button color={Platform.OS !== 'ios' ? '' : 'white'} title=" Back " onPress={() => setShowBoard(false)} />
                </View>
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
                </View>
            </ScrollView>
            <View style={styles.addButton}>
                <AddButton
                    onPress={() => setAddList(!addList)}
                />
            </View>
            {addList
                ? (
                    <AddList
                        lists={lists}
                        setLists={setLists}
                        addList={addList}
                        setAddList={setAddList}
                        bId={board.id}
                    />
                ) : <></>}
        </>
    );
}
