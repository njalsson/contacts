import React from 'react';
import {
    StyleSheet, FlatList, View, TouchableOpacity,
} from 'react-native';
import { lightBlue, darkBlue } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    colorButton: {
        width: 32,
        height: 32,
        borderRadius: 50,

        elevation: 10,
        margin: 10,
    },
    colorSelected: {
        borderWidth: 3,
        borderColor: darkBlue,
    },
});

export default function ColorPicker({
    onPressHandler, currentColor,
}) {
    const DATA = [
        { color: '#bdede0' },
        { color: '#bbdbd1' },
        { color: '#B6B8D6' },
        { color: '#7E78D2' },
        { color: '#6F58C9' },
        { color: '#F7AF9D' },
        { color: '#F7E3AF' },
        { color: '#F3EEC3' },
    ];
    return (
        <FlatList
            style={styles.container}
            data={DATA}
            keyExtractor={(item) => item.color}
            numColumns={3}
            renderItem={({ item }) => {
                if (currentColor === item.color) {
                    return (
                        <TouchableOpacity
                            onPress={() => onPressHandler(item.color)}
                            style={[styles.colorButton,
                                { backgroundColor: item.color },
                                styles.colorSelected]}
                        />
                    );
                }
                return (
                    <TouchableOpacity
                        onPress={() => onPressHandler('color', item.color)}
                        style={[styles.colorButton, { backgroundColor: item.color }]}
                    />
                );
            }}
        />
    );
}
