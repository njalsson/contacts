import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import styles from './styles';
import * as fileService from '../../services/fileService';

export default function SettingsModalScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button 
                title="delete all contacts"
                onPress={() => {
                    fileService.cleanDirectory();
                    navigation.navigate('Contacts', {action: "clean"});
                }}
            />
            <Button
                title="import contacts from phone"
                onPress={() => {
                    navigation.navigate('Contacts', {action: "import"});
                }}    
            />
        </View>
    );
}

