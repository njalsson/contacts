import React from 'react';
import {
    StyleSheet, FlatList, View, TouchableOpacity,
} from 'react-native';
import { lightBlue } from '../../styles/colors';
const styles = StyleSheet.create({
    container: {
        width: 500,
        height: 500,
    },
    colorButton: {
        width: 32,
        height: 32,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: lightBlue,
    },
});

export default function ColorPicker({
    onPressHandler,
}) {
    const colors = ['#bdede0', '#bbdbd1', '#B6B8D6', '#7E78D2', '#6F58C9', '#F7AF9D', '#F7E3AF', '#F3EEC3'];
    return (
        <FlatList
            style={styles.container}
            data={colors}
            key={item}
            numColumns={3}
            renderItem={(item) => {
                <TouchableOpacity
                    onPress={() => onPressHandler(item)}
                    style={[styles.colorButton, {backgroundColor: item}]}
                />;
            }}
        />
    );
}
