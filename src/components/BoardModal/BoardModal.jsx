import React from 'react';
import {
    View, Modal, Text, Pressable,
} from 'react-native';

import Inputs from '../Inputs/Inputs';
import styles from '../../styles/modal';
import LargeButton from '../LargeButton/LargeButton';
import { darkBlue, successGreen } from '../../styles/colors';

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
                    <LargeButton
                        color={successGreen}
                        onPress={confirmAction}
                        text={confirmText}
                    />
                    <LargeButton
                        color={darkBlue}
                        onPress={() => setShowModal(!showModal)}
                        text="cancel"
                    />
                </View>
                {children}
            </View>
        </Modal>
    );
}
