import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';

export default function ContactsView( { navigation }) {

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Image],
                });
    
                if (data.length > 0) {
                    const contact = data[0];
                    console.log(contact);
                }
            }
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
