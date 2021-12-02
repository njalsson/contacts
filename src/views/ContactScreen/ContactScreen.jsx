import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from './styles';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';
import { Ionicons } from '@expo/vector-icons'; 

export default function ContactScreen({route, navigation}) {
    const { name, phonenr, photo } = route.params;
    var phonenrstring = 'tel://+354'+phonenr;
    return (
        <View style={styles.container}>
            <View style={styles.infocontainer}>
                <ThumbnailPhoto
                    image={photo}
                    customStyle={{height: 128, width: 128, borderRadius: 100}}
                />

                <Text style={styles.name}>{name}</Text> 
            </View>

            
            <View style={styles.mobile}>
                <Text style={styles.mobileheader}>mobile</Text>
                <Text style={styles.phonenr} onPress={()=>{Linking.openURL(phonenrstring);}}>{phonenr}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(phonenrstring);}}>
                <Ionicons name="ios-call" size={64} color="green" />
            </TouchableOpacity>

        </View>
    );
}
