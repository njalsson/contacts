<<<<<<< HEAD
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'blue',
        width: '100%',
    },
});

export default function Board() {
    return (
        <View style={styles.container}>
            <Text> Hello </Text>
        </View>
=======
import React, { useState } from 'react';
import {
    View, Text, TouchableHighligh, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';
import EditBoard from '../EditBoard/EditBoard';
import EditButtonIcon from '../EditButtonIcon/EditButtonIcon';

export default function Board({
    board, setBoards, boards, setCurrentBoard, setShowBoard
}) {
    const {id, description, name, thumbnailPhoto } = board;
    const [edit, setEdit] = useState(false);
    
    return (
        <TouchableOpacity
            onPress={() => {
                setCurrentBoard(board);
                setShowBoard(true);
            }}
        >
            <View style={styles.container}>

                <View style={styles.subcontainer}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <ThumbnailPhoto style={styles.image} image={thumbnailPhoto} />
                <View style={styles.button}>
                    <EditButtonIcon
                        onPress={() => setEdit(!edit)}
                    />
                </View>
                {edit
                    ? (
                        <EditBoard
                            id={id}
                            name={name}
                            description={description}
                            imageUrl={thumbnailPhoto}
                            editBoard={edit}
                            setEditBoard={setEdit}
                            boards={boards}
                            setBoards={setBoards}

                        />
                    ) : <></>}
            </View>

        </TouchableOpacity>
>>>>>>> df97075bed4aba8a1df117e48f90eb5088bd2d29
    );
}
