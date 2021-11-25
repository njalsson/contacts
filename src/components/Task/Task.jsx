import React from 'react';
import { View, Text } from 'react-native';
// import { FlatList, Text } from 'react-native';
// import styles from './style';

function Task({ listId, taskdata }) {
    const tasksinlist = taskdata.filter((task) => task.listId === listId);
    return (
        <View>
            {tasksinlist.map((t) => (
                <Text key={t.id}>{`\n ${t.id}. ${t.name} \n \t ${t.description} `}</Text>
            ))}
        </View>
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
