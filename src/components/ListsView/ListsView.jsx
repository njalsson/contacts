import React from 'react';
import { View, Text, Button} from 'react-native';

import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './style';

export default function ListsView({
    board, setShowBoard
}) {
    return (
        <>
            <NavigationBar
                currentPage={board.name}
            >
                <Button color="white" title="back" onPress={() => setShowBoard(false)}/>
            </NavigationBar>
            <View style={{flex: 1}}>
                <Text>Here are the lists</Text>
            </View>
        </>
    );
}
