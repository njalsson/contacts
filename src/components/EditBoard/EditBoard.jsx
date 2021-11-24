import React, { useState } from 'react';
import {
    View, TextInput, Modal, Alert, Text, Pressable,
} from 'react-native';

import styles from './style';

export default function EditBoard({
    setBoards, id, name, description, imageUrl, editBoard, setEditBoard, boards
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
        const index = boardsCopy.findIndex((board => board.id == id));
        boardsCopy[index] = {
            ...boardsCopy[index],
            ...inputs,
        };
        setBoards(boardsCopy);
    };

    return (

        <Modal
            animationType="slide"
            transparent
            visible={editBoard}
            onRequestClose={() => {
                setEditBoard(!editBoard);
            }}
        >

            <View style={styles.modalView}>
                <Text style={styles.modalText}>Edit board</Text>
                <TextInput
                    style={styles.input}
                    value={inputs.name}
                    placeholder="name: "
                    onChangeText={(text) => onInputHandler('name', text)}
                />
                <TextInput
                    style={styles.input}
                    value={inputs.description}
                    placeholder="description: "
                    onChangeText={(text) => onInputHandler('description', text)}
                />
                <TextInput
                    style={styles.input}
                    value={inputs.imageUrl}
                    placeholder="image url"
                    onChangeText={(text) => onInputHandler('imageUrl', text)}
                />

                <View style={styles.containerRow}>
                    <Pressable
                        style={[styles.button, styles.edit]}
                        onPress={() => {
                            setEditBoard(!editBoard);
                            onEditHandler();
                        }}
                    >
                        <Text style={styles.textStyle}>edit</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.cancell]}
                        onPress={() => setEditBoard(!editBoard)}
                    >
                        <Text style={styles.textStyle}>cancell</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

    );
}
