import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function AddPhotoModal({
    showModal, setShowModal, takePhoto, selectPhoto, 
}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
        >
            <TouchableOpacity activeOpacity={1} style={styles.container} onPress={()=> setShowModal(!showModal)}>
                <View style={styles.modal}>
                    <TouchableOpacity
                        style={styles.icons}
                        onPress={takePhoto}
                    >
                        <Feather name="camera" size={48} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.icons}
                        onPress={selectPhoto}
                    >
                        <Feather name="image" size={48} color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

