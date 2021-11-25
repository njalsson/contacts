import React, { useState } from 'react';
import {
    View, Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './style';
import BoardModal from '../BoardModal/BoardModal';

export default function EditBoard({
    setBoards, id, name, description, imageUrl, editBoard, setEditBoard, boards,
}) {
    const [inputs, setInputs] = useState({
        name,
        description,
        imageUrl,
    });

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onEditHandler = () => {
        const boardsCopy = [...boards];
        const index = boardsCopy.findIndex(((board) => board.id == id));
        boardsCopy[index] = {
            ...boardsCopy[index],
            ...inputs,
        };
        setBoards(boardsCopy);
        setEditBoard(!editBoard);
    };

    const onDeleteHandler = () => {
        const boardsCopy = [...boards];
        const index = boardsCopy.findIndex(((board) => board.id == id));
        boardsCopy.splice(index, 1);
        setBoards(boardsCopy);
    };

    return (
        <BoardModal
            showModal={editBoard}
            setShowModal={setEditBoard}
            confirmText="edit"
            confirmAction={onEditHandler}
            inputs={inputs}
            onInputHandler={onInputHandler}
            name="Edit board"

        >
            <Pressable
                style={[styles.button, styles.delete]}
                onPress={() => {
                    setEditBoard(!editBoard);
                    onDeleteHandler();
                }}
            >
                <View><Feather name="trash-2" size={24} /></View>
            </Pressable>
        </BoardModal>
    );
}
