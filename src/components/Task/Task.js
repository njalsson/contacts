/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
// import { TaskData } from './taskData';
// import { tasks } from './data.json';
import {Fokk} from './Fokk.js';

function Task() {
    return (
        <View style={style.task}>
            <Fokk/>
            <Text style={style.task}>prump</Text>
        </View>
    );
}

export default Task;
