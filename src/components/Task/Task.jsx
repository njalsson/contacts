import React from 'react';
import { FlatList, Text } from 'react-native';
// import styles from './style';

function Task({ listId, taskdata }) {
    // const test2 = taskdata.filter((task) => task.listId === listId);
    // console.log(test2);
    return (
        <FlatList
            data={taskdata.filter((task) => task.listId === listId)}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Text>{`${item.id}. ${item.name} \n \t ${item.description} `}</Text>
            )}
        />
    );
}
export default Task;
