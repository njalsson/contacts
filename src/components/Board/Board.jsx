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
    );
}
