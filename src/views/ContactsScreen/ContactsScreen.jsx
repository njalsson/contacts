/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {  View, Button, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import * as fileService from '../../services/fileService';
import * as contactService from '../../services/contactService';
import ContactItem from '../../components/ContactItem/ContactItem';
import SearchBar from '../../components/SearchBar/SearchBar';

const ContactsScreen = ( { navigation, route }) => {

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
            setSort(true);

        })();
        settingsButton();
    }, []);

    useEffect(()=> {
        //Triggered when route params filename changes.
        if (route.params) {

            const { fileName, action, id} = route.params;
            if (action == 'add') {
                loadContact(fileName);
            }

            if (action == 'clean') {
                setContacts([]);
            }

            if (action == 'import') {
                importContacts();
            }
            if (action == 'edit') {
                onEditContact(fileName);
            }
            if (action == 'delete') {
                onDeleteHandler(id);
            }
            route.params=undefined;
        }
    },[route.params]);


    useEffect(() => {
        if (sort) {
            sortContacts();
        }
    },[sort]);

    const onDeleteHandler = async (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const onEditContact = async (fileName) => {
        const newContact = await fileService.loadContact(fileName);
        setContacts([...contacts.filter(contact => contact.id !== newContact.id), newContact]);
        setSort(true);
    };

    const importContacts = async () => {
        const newContacts = await contactService.getContactsFromPhone();

        const filtered = newContacts.filter(c => !(contacts.some(contact => contact.id == c.id)));
        filtered.forEach(async (co) => {await fileService.addContact(co);});


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
                style={{height: '100%'}}
                contentContainerStyle={{alignItems: 'center', paddingBottom: 100}}
                data={searchText.length > 0 ? searchRes : contacts}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Contact',{
                                fileName: item.fileName,
                            })}
                        >
                            <ContactItem
                                name={item.name}
                                image={item.image}
                            />
                        </TouchableOpacity>
                    );
                }}
            >

            </FlatList>

        </View>
    );
};

ContactsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};


export default ContactsScreen;
