import React from 'react';
import { View, Text, ScrollView } from 'react-native';

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
            <ScrollView>
                <View style={{ backgroundColor: list.color, borderRadius: 10, padding: 15 }}>
                    {listdata.lists.filter((listo) => listo.id === list.id).map((lis) => (
                        <Task listId={lis.id} taskdata={listdata.tasks} key={lis.id} />
                    ))}
                </View>
            </ScrollView>

        </>
    );
}
export default List;
