/* eslint-disable react/prop-types */
import React from 'react';
import {  TextInput, View } from 'react-native';
import styles from './styles';

export default function SearchBar({
    setSearchRes, searchText, setSearchText, compareFunc, contacts



}) {
    return (
        <View
            style={styles.container}
        >

            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchText}
                onChangeText={(text) => {
                    setSearchText(text);
                    setSearchRes([...contacts].filter((s)=> s.name.toLowerCase().includes(text.toLowerCase())).sort(compareFunc));
                }}
            />
        </View>
    );
}

