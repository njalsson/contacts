import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
import * as fileService from '../../services/fileService';

export default function ContactsView( { navigation }) {

    useEffect(() => {
        (async () => {
            const images = await fileService.getAllContacts();
            console.log(images)
        })();
    }, []);

    return (
        <View>
            <Text>This is the Contacts screen loaded from src/views/Contacts using navigation</Text>
            <Button
                title="Checkout contact view"
                onPress={() => { navigation.navigate('Contact')}}
            />
        </View>
    );
}

ContactsView.propTypes = {
    navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({});
