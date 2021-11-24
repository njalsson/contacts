import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import styles from './styles';

export default function NavigationBar({currentPage, goBack}) {
    return (
        
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.navigation}>
                    {currentPage}
                </Text>
            </View>
        </SafeAreaView>
        
    )
}