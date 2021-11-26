import React, { useState } from 'react';

import ListsModal from '../ListsModal/ListsModal';

export default function AddList({
    lists, setLists, addList, setAddList, bId
}) {
    const [inputs, setInputs] = useState({
        name: '',
        color: "#bdede0",
    });

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onAddHandler = () => {
        const listsCopy = [...lists];
        const obj = {
            id: Math.max.apply(Math, listsCopy.map(function(o) {return o.id})) + 1,
            ...inputs,
            boardId: bId,
        };
        listsCopy.push(obj);
        setLists(listsCopy);
        setAddList(!addList);
    };

    return (
        <ListsModal
            showModal={addList}
            setShowModal={setAddList}
            confirmText="Add"
            confirmAction={onAddHandler}
            inputs={inputs}
            onInputHandler={onInputHandler}
            name="Add list"
        />
    );
}
