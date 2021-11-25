import React from 'react';
import { FlatList } from 'react-native';
import styles from './Style';
import Task from '../Task/Task';

function List({ list, listdata }) {
    return (
        <FlatList
            data={listdata.lists.filter((l) => l.id === list.id)}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Task
                    listId={item.id}
                    taskdata={listdata.tasks}
                    style={styles.list}
                    // style={{ backgroundColor: list.color }}
                />
                // <Text style={style.list}>{`${item.id}. ${item.name} \n `}</Text>
            )}
        />
    );
}
export default List;
