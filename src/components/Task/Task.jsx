import React from 'react';
import { Text } from 'react-native';
import styles from './style';

function cssSwitcher(isfinished, listId) {
    // changes the css of a task so that it is striked through if
    // it is finished or in the "done" list i the boringg stuff board
    if (isfinished || listId === 5) {
        return styles.finishedtask;
    }
    return styles.task;
}
function Task({
    tasks, setTasks, task,
}) {
    return (
        <Text style={cssSwitcher(task.isFinished, task.listId)}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>

    );
}
export default Task;
