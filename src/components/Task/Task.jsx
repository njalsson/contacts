import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

function cssSwitcher(isfinished, listId) {
    if (isfinished || listId === 5) {
        return styles.finishedtask;
    }
    return styles.task;
}
function Task({
    listId, tasks, setTasks, task,
}) {
    return (
        <Text style={cssSwitcher(task.isFinished, task.listId)}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>

    );
}
export default Task;
