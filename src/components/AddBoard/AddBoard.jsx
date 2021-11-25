import React, { useState } from 'react';

import styles from './styles';
import BoardModal from '../BoardModal/BoardModal';

export default function AddBoard({
    setBoards, boards, addingBoard, setAddingBoard, prevId, setId
}) {

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        imageUrl: '',
    });

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onAddHandler = () => {
        const boardsCopy = [...boards];
        const object = {
            id: prevId,
            ...inputs,
        };

        boardsCopy.push(object);
        setBoards(boardsCopy);
        const newId = prevId + 1;
        setId(newId);
        setAddingBoard(!addingBoard);
    };

    return (
        <BoardModal
            showModal={addingBoard}
            setShowModal={setAddingBoard}
            confirmText="Add"
            confirmAction={onAddHandler}
            inputs={inputs}
            onInputHandler={onInputHandler}
            name="Add board"
        />
    );
};