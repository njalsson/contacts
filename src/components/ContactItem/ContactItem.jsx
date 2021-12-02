/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';

export default function ContactItem({name, image}) {
    var names = name.split(' ');
    var initials = '';
    for (var i= 0; i < names.length; i++){
        if (names[i].length > 0){
            initials += names[i][0];
        }
    }
    
    if (image) {
        return (
            <View style={styles.container}>
                <ThumbnailPhoto image={image}/>
                <Text style={styles.name}> {name}  </Text>
            </View>

        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.noimage}><Text style={styles.noimageletter}>{initials}</Text></View>
            <Text style={styles.name}> {name}  </Text>
        </View>

    );}
