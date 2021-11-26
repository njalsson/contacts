import React from 'react';
import { StyleSheet, TouchableHighlight, Text, TouchableOpacity } from 'react-native';

import { lightBlue, successGreen } from '../../styles/colors';

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        width: 100,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default function LargeButton({
    color,
    onPress,
    text,
}) {
    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: color}]}
            onPress={onPress}
        >
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}
