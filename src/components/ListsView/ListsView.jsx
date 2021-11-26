import React from 'react';
import {
    View, Button, ScrollView, Platform,
} from 'react-native';

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
                <View style={styles.backbutton}>
                    {/* button color fixes a bug on android/web
                     where the button gets a white overlay and is unreadable */}
                    <Button color={Platform.OS === 'android' || Platform.OS === 'web' ? '' : 'white'} title=" Back " onPress={() => setShowBoard(false)} />
                </View>
            </NavigationBar>
            <ScrollView>
                <View style={styles.container}>
                    {test.map((lis) => (
                        <List list={lis} listdata={data} key={lis.id} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}
