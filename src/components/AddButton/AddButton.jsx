import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5,
        width: 64,
        height: 64,
    },
});

export default function AddButton({ onPress, customStyle}) {
    return (
        <TouchableHighlight
            style={[styles.button, customStyle]}
            onPress={onPress}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
        >
            <View>
                <Feather name="plus" size={24} color="black" />
            </View>

        </TouchableHighlight>
    );
}
