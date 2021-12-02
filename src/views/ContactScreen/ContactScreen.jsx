/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {  Text, View, TouchableOpacity, Linking, Button } from 'react-native';
import styles from './styles';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';
import { Ionicons } from '@expo/vector-icons'; 
import * as fileService from '../../services/fileService';
import { HeaderBackButton } from '@react-navigation/elements';


export default function ContactScreen({route, navigation}) {
    const [currentContact, setCurrentContact] = useState({});
    var phonenrstring = 'tel://'+currentContact.phoneNumber;
    var smsstring = 'sms://'+currentContact.phoneNumber;
    if (currentContact.name && !currentContact.image){
        //when the async function returns the name we get the initials of the contact to use as a temporary profile picture
        var names = currentContact.name.split(' ');
        var initials = '';
        for (var i= 0; i < names.length; i++){
            if (names[i].length > 0){
                initials += names[i][0];
            }
        }}
    
    

    const editButton = () => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button
                        title="Edit"
                        onPress={() => navigation.navigate('Edit contact', {fileName: currentContact.fileName})}
                    />
                );
            },
        },);
    };
    const backButton = () => {
        navigation.setOptions({
            headerLeft: props => {
                return (
                    <HeaderBackButton
                        {...props}
                        onPress={() => navigation.navigate('Contacts', {...route.params})}
                    />
                );
            },
        },);
    };

    useEffect(() => {
        const { fileName } = route.params;
        (async () => {
            loadContact(fileName);
        })();
        editButton();
    },[]);

    useEffect(()=> {
        editButton();
    },[currentContact]);

    useEffect(() => {
        const { fileName, action } = route.params;
        if(action === 'edit') {
            (async () => {
                loadContact(fileName);
            })();
        }
        backButton();
    },[route.params]);

    const loadContact = async fileName => {
        setCurrentContact(await fileService.loadContact(fileName));
    };
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                {/* if the contact has a photo display it, otherwise display their initials */}
                {currentContact.image ?
                    <ThumbnailPhoto
                        image={currentContact.image}
                        customStyle={{height: 128, width: 128, borderRadius: 100}}
                    />
                    :         <View >
                        <View style={styles.noimage}><Text style={styles.noimageletter}>{initials}</Text></View>
                    </View>}

                <Text style={styles.name}>{currentContact.name}</Text> 
            </View>

            
            <View style={styles.mobile}>
                <Text style={styles.mobileheader}>mobile</Text>
                <Text style={styles.phonenr} onPress={()=>{Linking.openURL(phonenrstring);}}>{currentContact.phoneNumber}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(phonenrstring);}}>
                    <View style={styles.callbutton}>
                        <Ionicons name="ios-call" size={44} color='white'   />
                    </View>
                </TouchableOpacity>
                <View style={styles.divider}>
                    <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(smsstring);}}>
                        <View style={styles.smsbutton}>
                            <Ionicons name="chatbubble-ellipses-outline" size={44} color='white'   />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
