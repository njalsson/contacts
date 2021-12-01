import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import * as Contacts from 'expo-contacts';
import * as fileService from '../../services/fileService';
import * as contactService from '../../services/contactService';
import ContactItem from '../../components/ContactItem/ContactItem';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function ContactsScreen( { navigation, route }) {

    const settingsButton = () => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Button
                        title="Settings"
                        onPress={() => navigation.navigate('Settings')}
                    />
                );
            }
        },);
    };

    const [contacts, setContacts] = useState([]);
    const [sort, setSort] = useState(false);
    const [searchRes, setSearchRes] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        (async () => {
            const loadedContacts = await fileService.getAllContacts();
            setContacts(loadedContacts);
            console.log(contacts);
            //const phoneContacts = await contactService.getContactsFromPhone();
            //console.log(phoneContacts);
            setSort(true);

        })();
        settingsButton();
    }, []);

    useEffect(()=> {
        //Triggered when route params filename changes.
        if (route.params) {
            
            const { fileName, action } = route.params;
            if (action == 'add') {
                loadContact(fileName);
            }

            if (action == 'clean') {
                setContacts([]);
            }

            if (action == 'import') {
                importContacts();
            }
            route.params = undefined;
        }
    },[route.params]);

    useEffect(() => {
        if (sort) {
            sortContacts();
        }
    },[sort]);


    const importContacts = async () => {
        const newContacts = await contactService.getContactsFromPhone();
        const filtered = newContacts.filter(async (c) => {
            if (!(contacts.some(contact => contact.id === c.id))) { //check if the contact is already imported
                return await fileService.addContact(c);
            }});
        console.log(filtered);
        setContacts([...contacts, ...filtered]);
        setSort(true);

    };

    const loadContact = async fileName => {
        const newContact = await fileService.loadContact(fileName);
        setContacts([...contacts, newContact]);
        setSort(true);
    };

    function compare( a, b ) {
        const aname = a.name.toLowerCase();
        const bname = b.name.toLowerCase();
        if ( aname < bname ){
            return -1;
        }
        if ( aname > bname ){
            return 1;
        }
        return 0;
    }

    const sortContacts = async () => {
        const copy = [...contacts];
        copy.sort(compare);
        console.log(copy);
        setSort(false);
        setContacts(copy);
    };

    return (
        <View style={{paddingTop: 0}}>
            <SearchBar
                searchText={searchText}
                searchRes={searchRes}
                setSearchText={setSearchText}
                setSearchRes={setSearchRes}
                compareFunc={compare}
                contacts={contacts}
            />
            <FlatList
                data={searchText.length > 0 ? searchRes : contacts}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <ContactItem
                            name={item.name}
                            image={item.image}
                        />
                    );
                }}
            >
                
            </FlatList>
            <Button
                title="Checkout contact view"
                onPress={() => { navigation.navigate('Contact');}}
            />
        </View>
    );
}

ContactsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({});
