import React, { useState } from 'react';

import { View, Pressable } from 'react-native';

import ListsModal from '../ListsModal/ListsModal';

export default function EditList({
    lists, setLists, list, editList, setEditList,
}) {
    const [inputs, setInputs] = useState({
        name: list.name,
        color: list.color,
    });

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onEditHandler = () => {
        const listsCopy = [...lists];
        const index = listsCopy.findIndex((lis) => lis.id === list.id);
        listsCopy[index] = {
            ...listsCopy[index],
            ...inputs,
        };
        setLists(listsCopy);
        setEditList(!editList);
    };

    return (
        <ListsModal
            showModal={editList}
            setShowModal={setEditList}
            confirmText="edit"
            confirmAction={onEditHandler}
            inputs={inputs}
            onInputHandler={onInputHandler}
            name="Edit list"
        />
    );
}