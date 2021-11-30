import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
import * as fileService from '../../services/fileService';
import * as contactService from '../../services/contactService';

export default function ContactsView( { navigation, route }) {

    useEffect(() => {
        (async () => {
            const contacts = await fileService.getAllContacts();
            const phoneContacts = await contactService.getContactsFromPhone();
            console.log(phoneContacts);
        })();
    }, []);

    useEffect(()=> {
        //Triggered when route params filename changes.
        if (route.params) {
            
            const { fileName } = route.params;
            route.params = undefined;
        }
    },[route.params]);

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
