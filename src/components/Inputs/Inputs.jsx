import React from 'react';
import { StyleSheet, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
});

export default function Inputs({
    value, onChange, placeholder
}) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            placeholder={placeholder}
            onChangeText={onChange}
        />
    );
}
