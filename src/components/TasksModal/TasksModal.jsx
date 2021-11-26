import React from 'react';
import {
    Modal, View, Text, Picker,
} from 'react-native';

import Inputs from '../Inputs/Inputs';
import styles from '../../styles/modal';
import LargeButton from '../LargeButton/LargeButton';
import { darkBlue, successGreen } from '../../styles/colors';

export default function TasksModal({
    children,
    showModal,
    setShowModal,
    confirmText,
    confirmAction,
    inputs,
    onInputHandler,
    name,
    lists,
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
                <Inputs
                    value={inputs.name}
                    placeholder="description: "
                    onChange={(text) => onInputHandler('description', text)}
                />
                <Picker
                    selectedValue={inputs.listId}
                    onValueChange={({ itemValue }) => onInputHandler('listId', itemValue)}
                >
                    {lists.map((list) => (
                        <Picker.Item label={list.name} value={list.id} />
                    ))}
                </Picker>
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
