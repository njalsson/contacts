import React, { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import styles from './styles';

export default function SearchBar({
    setSearchRes, SearchRes, searchText, setSearchText, compareFunc, contacts



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
                    setSearchRes([...contacts].filter((s)=> s.name.includes(text)).sort(compareFunc));
                }}
            />
        </View>
    )
}

