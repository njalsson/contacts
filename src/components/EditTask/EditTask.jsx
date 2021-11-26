import React, { useState } from 'react';

import { View, Pressable } from 'react-native';

import TasksModal from '../TasksModal/TasksModal';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function EditTask({
    lists, tasks, setTasks, editTask, setEditTask, task,
}) {
    const [inputs, setInputs] = useState({
        name: task.name,
        description: task.description,
        listId: task.listId,
    });
    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onEditHandler = () => {
        const tasksCopy = [...tasks];
        const index = tasksCopy.findIndex((t) => t.id == task.id);
        tasksCopy[index] = {
            ...tasksCopy[index],
            ...inputs,
        };
        setTasks(tasksCopy);
        setEditTask(!editTask);
    };
    const onDeleteHandler = () => {
        const tasksCopy = [...tasks];
        const index = tasksCopy.findIndex((t) => t.id == task.id);
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
        setEditTask(!editTask);
    };

    return (
        <TasksModal
            showModal={editTask}
            setShowModal={setEditTask}
            confirmText="Edit"
            confirmAction={onEditHandler}
            inputs={inputs}
            onInputHandler={onInputHandler}
            name="Edit task"
            lists={lists}
        >
            <DeleteButton
                onPress={onDeleteHandler}
            />
        </TasksModal>
    );
}
