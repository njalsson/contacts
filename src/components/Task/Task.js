/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { FlatList, Text } from 'react-native';
// import { tasks } from './data.json';
import style from './style';

function Task({listId, taskdata}) {
  const test2 = taskdata.filter((task) => task.listId === listId);
  console.log(test2);
    return (
        <FlatList
            data={taskdata.filter((task) => task.listId === listId)}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
            <Text style={style.task}>{`${item.id}. ${item.name} \n \t ${item.description}`}</Text>
          )}
        />
    );
}
export default Task;
