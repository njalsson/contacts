import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { errorRed } from '../../styles/colors';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    button: {
        backgroundColor: errorRed,
        height: 45,
        width: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        position: 'absolute',
        top: -10,
        left: -10,
    },
});

export default function DeleteButton({
    onPress,
}) {
    return (
        <Pressable
            style={styles.button}
            onPress={() => {
                onPress()
            }}
        >
            <View><Feather name="trash-2" size={24} /></View>
        </Pressable>
    );
}
