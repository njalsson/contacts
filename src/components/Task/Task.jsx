import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

function Task({ listId, taskdata }) {
    const tasksinlist = taskdata.filter((task) => task.listId === listId);
    return (
        <View>
            {tasksinlist.map((t) => {
                if (t.isFinished || t.listId === 5) {
                    return (<Text key={t.id} style={styles.finishedtask}>{` ${t.id}. ${t.name} \n \t ${t.description} \n`}</Text>);
                }
                return (<Text key={t.id} style={styles.task}>{` ${t.id}. ${t.name} \n \t ${t.description} \n`}</Text>);
            })}
        </View>

    );
}
export default Task;
