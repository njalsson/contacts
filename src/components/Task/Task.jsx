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
<<<<<<< HEAD

        <Text style={styles.task}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>
        // <FlatList
        //     data={taskdata.filter((task) => task.listId === listId)}
        //     keyExtractor={({ id }) => id}
        //     renderItem={({ item }) => (
        //         <Text>{`\n ${item.id}. ${item.name} \n \t ${item.description} `}</Text>
        //     )}
        // />
=======
        <Text style={cssSwitcher(task.isFinished, task.listId)}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>

>>>>>>> bf0db6e856272b96bf25ea12a1fdf3af97607e52
    );
}
export default Task;
