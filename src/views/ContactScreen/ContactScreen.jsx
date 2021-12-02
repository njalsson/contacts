import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from './styles';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';
import { Ionicons } from '@expo/vector-icons'; 
import * as fileService from '../../services/fileService';
import { HeaderBackButton } from '@react-navigation/elements';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function ContactScreen({route, navigation}) {
    const [currentContact, setCurrentContact] = useState({});
    var phonenrstring = 'tel://'+currentContact.phoneNumber;
    var smsstring = 'sms://'+currentContact.phoneNumber;
    
    

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
                )
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
    }
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                <ThumbnailPhoto
                    image={currentContact.image}
                    customStyle={{height: 128, width: 128, borderRadius: 100}}
                />

                <Text style={styles.name}>{currentContact.name}</Text> 
            </View>

            
            <View style={styles.mobile}>
                <Text style={styles.mobileheader}>mobile</Text>
                <Text style={styles.phonenr} onPress={()=>{Linking.openURL('tel://+354'+{phonenr});}}>{currentContact.phoneNumber}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(phonenrstring);}}>
                    <View style={styles.callbutton}>
                        <Ionicons name="ios-call" size={44} color='white'   />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(smsstring);}}>
                    <View style={styles.smsbutton}>
                        <MaterialIcons name="sms" size={44} color='white'   />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}
