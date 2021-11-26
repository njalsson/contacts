import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { darkBlue } from '../../styles/colors';

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
                <FontAwesome5
                    name="edit"
                    size={20}
                    color="white"
                />
            </View>
        </TouchableHighlight>
    );
}
