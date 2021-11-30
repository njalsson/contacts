import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import styles from './styles';


export default function ContactScreen() {
    return (
        <View style={styles.container}>

            <Image style={styles.image}
                source={ require('./l60Hf.png') }

            />
            <Text style={styles.name}>Daníel Freyr Gylfason</Text>
            <View style={styles.mobile}>
                <Text style={styles.mobileheader}>mobile</Text>
                <Text style={styles.phonenr} onPress={()=>{Linking.openURL('tel://+3548660115');}}>866-0115</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL('tel://+3548660115');}}>
                    <Text>Call </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

