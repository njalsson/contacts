import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';
import EditBoard from '../EditBoard/EditBoard';

export default function Board({
    id, name, thumbnailPhoto, description, setBoards, boards
}) {
    const [edit, setEdit] = useState(false);
    return (
        <View style={styles.container}>

            <View style={styles.subcontainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <ThumbnailPhoto style={styles.image} image={thumbnailPhoto} />
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                onPress={() => setEdit(!edit)}
                underlayColor="#DDDDDD"
            >
                <Text>Edit</Text>
            </TouchableHighlight>
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
    );
}
