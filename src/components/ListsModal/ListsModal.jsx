import React from 'react';
import {
    Modal, View, Text,
} from 'react-native';

import Inputs from '../Inputs/Inputs';
import styles from '../../styles/modal';
import LargeButton from '../LargeButton/LargeButton';
import { darkBlue, successGreen } from '../../styles/colors';
import ColorPicker from '../ColorPicker/ColorPicker';

export default function ListsModal({
    children, showModal, setShowModal, confirmText, confirmAction, inputs, onInputHandler, name,
}) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{name}</Text>
                <Inputs
                    value={inputs.name}
                    placeholder="name: "
                    onChange={(text) => onInputHandler('name', text)}
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
