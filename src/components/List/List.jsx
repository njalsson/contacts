import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Style';
import Task from '../Task/Task';
import EditButtonIcon from '../EditButtonIcon/EditButtonIcon';
import EditList from '../EditList/EditList';
import AddButton from '../AddButton/AddButton';
import AddTask from '../AddTask.jsx/AddTask';
import { lightBlue } from '../../styles/colors';
import fonts from '../../styles/fonts';

function List({
    list, lists, setLists, tasks, setTasks,
}) {
    const [edit, setEdit] = useState(false);
    const [addTask, setAddTask] = useState(false);
    return (
        <>

            <View style={[{ backgroundColor: list.color}, styles.container]}>
                <Text style={[styles.listHeader, fonts.h1]}>
                    {list.name}
                </Text>

                {tasks.filter((t) => list.id === t.listId).map((item) => (
                    <Task
                        key={item.id}
                        list={list}
                        lists={lists}
                        tasks={tasks}
                        setTasks={setTasks}
                        task={item}
                    />
                )) }
                <View style={styles.buttons}>
                    <EditButtonIcon
                        onPress={() => setEdit(!edit)}
                    />
                    <AddButton
                        onPress={() => setAddTask(!addTask)}
                        customStyle={{
                            width: 34,
                            height: 34,
                            backgroundColor: lightBlue,
                            borderWidth: 2,
                            borderColor: 'white'}}
                    />
                </View>
            </View>
            {edit
                ? (
                    <EditList
                        lists={lists}
                        setLists={setLists}
                        list={list}
                        editList={edit}
                        setEditList={setEdit}
                    />
                ) : <></>}
            {addTask
                ? (
                    <AddTask
                        addTask={addTask}
                        setAddTask={setAddTask}
                        list={list}
                        setTask={setTasks}
                        tasks={tasks}
                        lists={lists.filter((lis) => lis.boardId === list.boardId)}
                    />
                ) : <></>}

        </>
    );
}
export default List;
