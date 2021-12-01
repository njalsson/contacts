import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
import * as fileService from '../../services/fileService';
import * as contactService from '../../services/contactService';
import styles from './styles';

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
    async function eitthvad(){
        var prump = [];
        var drasl =  await fileService.getAllContacts();
        var skitur =  await contactService.getContactsFromPhone();
        drasl.map(i => (prump.push(i.contact)));
        skitur.map(n => (prump.push(n)));
        return prump;
    }
    
    return (Promise.resolve(eitthvad()).then( function oged(mella){
        if (mella){
            for (let i = 0; i < mella.length; i++){
                console.log(mella[i]);
            }

            return ([
                <ScrollView>
                    {mella.map((j) => (
                        <><TouchableOpacity onPress={() => { route('Contact'); } }>
                            <View  style={styles.contactCard}>
                                <Text style={styles.name} >sdfgsgf</Text>
                                <Image style={styles.image}
                                    source={require('./l60Hf.png')} />
                            </View>
                        </TouchableOpacity></>
                    ))}
                </ScrollView>

        
                    ]);}
        return <Text>eitthvað</Text>;}));
}

ContactsView.propTypes = {
    navigation: PropTypes.object.isRequired,
};

