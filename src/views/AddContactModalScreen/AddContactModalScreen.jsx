import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import BasicInput from '../../components/BasicInput/BasicInput';


export default function AddContactModalScreen({ navigation }) {
    const doneButton = () => {
        navigation.setOptions({headerRight: () => {return (
            <Button
                title="done"
                onPress={navigation.goBack}    
            />
        
        )}});
    };
    
    useEffect(() => {
        doneButton();
    }, []);

    return (
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <BasicInput
                    onChange={()=> console.log("change")}
                    placeholder="name"
                    value=""
                />
                <BasicInput
                    onChange={()=> console.log("change")}
                    placeholder="phone number"
                    value=""
                />

            </View>
            
        </View>
    )
}


AddContactModalScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
}