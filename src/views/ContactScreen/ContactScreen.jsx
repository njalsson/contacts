import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from './styles';


export default function ContactScreen({route, navigation}) {
    const { name, phonenr } = route.params;
    return (
        <View style={styles.container}>

            <Image style={styles.image}
                source={ require('./l60Hf.png') }

            />
          <Text style={styles.name}>{name}</Text>
            <View style={styles.mobile}>
                <Text style={styles.mobileheader}>mobile</Text>
                <Text style={styles.phonenr} onPress={()=>{Linking.openURL('tel://+354'+{phonenr});}}>{phonenr}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('tel://+354'+{phonenr});}}>
                    <Text>Call </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
