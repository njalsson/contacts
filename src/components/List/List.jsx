import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './Style';
import Task from '../Task/Task';
import EditButtonIcon from '../EditButtonIcon/EditButtonIcon';
import EditList from '../EditList/EditList';

function List({
    list, lists, setLists, tasks, setTasks, editList, setEditList
}) {
    const [edit, setEdit] = useState(false);
    return (
        <>
            <Text style={styles.listHeader}>
                {list.id}
                .&nbsp;
                {list.name}
            </Text>

            <View style={[{ backgroundColor: list.color, borderRadius: '10px', padding: 15 }, styles.container]}>

                {tasks.filter((t) => list.id === t.listId).map((item) => (
                    <Task
                        key={item.id}
                        listId={list.id}
                        tasks={tasks}
                        setTasks={setTasks}
                        task={item}
                    />
                )) }
                <View style={styles.editButton}>
                    <EditButtonIcon
                        onPress={() => setEdit(!edit)}
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


        </>
    );
}
export default List;
