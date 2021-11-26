import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { darkBlue } from '../../styles/colors';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkBlue,
        height: 30,
        width: 60,
    },
});

export default function EditButtonIcon({ onPress }) {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={() => onPress()}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
        >
            <View>
                <Feather
                    name="edit-2"
                    size={20}
                    color="white"
                />
            </View>
        </TouchableHighlight>
    );
}
