import React from 'react';
import { FlatList, Text } from 'react-native';
import styles from './Style';
import Task from '../Task/Task';

function List({ list, listdata }) {
    return (
        <>
            <Text style={styles.listHeader}>
                {list.id}
                .&nbsp;
                {list.name}

            </Text>
            <FlatList
                style={{ backgroundColor: list.color, borderRadius: '10px' }}
                data={listdata.lists.filter((l) => l.id === list.id)}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <Task
                        listId={item.id}
                        taskdata={listdata.tasks}
                    />
                    // <Text style={style.list}>{`${item.id}. ${item.name} \n `}</Text>
                )}
            />

        </>
    );
}
export default List;
