import React from 'react';
import {
    View, Modal, Text, Pressable,
} from 'react-native';

import Inputs from '../Inputs/Inputs';
import styles from './style';

export default function BoardModal({
    showModal, setShowModal, confirmText, confirmAction, inputs, onInputHandler, name, children
}) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{name}</Text>
                <Inputs
                    value={inputs.name}
                    placeholder="name: "
                    onChange={(text) => onInputHandler('name', text)}
                />
                <Inputs
                    value={inputs.description}
                    placeholder="description: "
                    onChange={(text) => onInputHandler('description', text)}
                />
                <Inputs
                    value={inputs.imageUrl}
                    placeholder="image url: "
                    onChange={(text) => onInputHandler('imageUrl', text)}
                />
                <View style={styles.containerRow}>
                    <Pressable
                        style={[styles.button, styles.actionButton]}
                        onPress={confirmAction}
                    >
                        <Text style={styles.textStyle}>{confirmText}</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.cancellButton]}
                        onPress={() => setShowModal(!showModal)}
                    >
                        <Text style={styles.textStyle}>cancell</Text>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}
