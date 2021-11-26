import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

function Task({
    listId, tasks, setTasks, task,
}) {
    return (

        
            

        
        <Text style={styles.task}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>
        // <FlatList
        //     data={taskdata.filter((task) => task.listId === listId)}
        //     keyExtractor={({ id }) => id}
        //     renderItem={({ item }) => (
        //         <Text>{`\n ${item.id}. ${item.name} \n \t ${item.description} `}</Text>
        //     )}
        // />

    );
}
export default Task;
