import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';

export default function ContactItem({name, image}) {
    return (
        <View style={styles.contactCard}>
            <Text style={styles.name}> {name}  </Text>
            <ThumbnailPhoto image={image}/>
        </View>

    );
}
