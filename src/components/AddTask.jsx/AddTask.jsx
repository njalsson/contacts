import React, { useState } from 'react';

import TaskModal from '../TasksModal/TasksModal';

export default function AddTask({
    lists, addTask, setAddTask, list, setTask, tasks,
}) {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        listId: list.id,
    });

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onAddHandler = () => {
        const tasksCopy = [...tasks];
        const obj = {
            id: Math.max.apply(Math, tasksCopy.map(function(o) {return o.id})) + 1,
            ...inputs,
        };
        tasksCopy.push(obj);
        setTask(tasksCopy);
        setAddTask(!addTask);
    };

    return (
        <TaskModal
            showModal={addTask}
            setShowModal={setAddTask}
            confirmText="Add"
            confirmAction={onAddHandler}
            onInputHandler={onInputHandler}
            name="Add task"
            lists={lists}
            inputs={inputs}
        />
    );
};