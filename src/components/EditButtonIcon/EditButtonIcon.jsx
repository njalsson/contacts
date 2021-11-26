import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { darkBlue, successGreen} from '../../styles/colors';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: successGreen,
        height: 30,
        width: 60,
        borderColor: 'white',
        borderWidth: 2,
    },
});

export default function EditButtonIcon({ onPress, customStyle}) {
    return (
        <TouchableHighlight
            style={[styles.button, customStyle]}
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
