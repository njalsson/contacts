import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import EditButtonIcon from '../EditButtonIcon/EditButtonIcon';
import EditTask from '../EditTask/EditTask';

function Task({
    tasks, setTasks, task, lists, list,
}) {
    const [edit, setEdit] = useState(false);

    let containerStyle = styles.container;
    let textStyle = styles.task;

    if (task.isFinished) {
        containerStyle = [styles.container, styles.containerFinished];
        textStyle = styles.finishedtask;
    }
    const onFinishedHandler = () => {
        const tasksCopy = [...tasks];
        const index = tasksCopy.findIndex((t) => t.id === task.id);
        tasksCopy[index].isFinished = !tasksCopy[index].isFinished;
        setTasks(tasksCopy);
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                onFinishedHandler();
            }}
        >

            <View style={containerStyle}>
                <Text style={textStyle}>{` ${task.id}. ${task.name} \n \t ${task.description} \n`}</Text>
                <View style={{ position: 'absolute', top: -15, right: -10 }}>
                    <EditButtonIcon
                        onPress={() => setEdit(!edit)}
                        customStyle={{ borderRadius: 50, width: 36, height: 36 }}
                    />
                </View>
                {edit
                    ? (
                        <EditTask
                            lists={lists.filter((lis) => (lis.boardId === list.boardId))}
                            tasks={tasks}
                            setTasks={setTasks}
                            editTask={edit}
                            setEditTask={setEdit}
                            task={task}
                        />

                    ) : <></>}
            </View>
        </TouchableWithoutFeedback>
    );
}
export default Task;
