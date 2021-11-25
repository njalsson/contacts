import React from 'react';
import { FlatList} from 'react-native';
import style from './Style';
import Task from '../Task/Task';

function List({ boardId, listdata }) {
    const test2 = listdata.lists.filter((list) => list.boardId === boardId);
    console.log(test2);
    return (
        <FlatList
            data={listdata.lists.filter((list) => list.id === boardId)}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Task listId={item.id} taskdata={listdata.tasks} style={style.List} />
                // <Text style={style.list}>{`${item.id}. ${item.name} \n `}</Text>
            )}
        />
    );
}
export default List;
