import React, { useState } from 'react';
import { Text, View, Image,  TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import thumbnail from './profile.jpeg';


export default function ContactItem({name}) {
    return (
      <View style={styles.contactguy}>
        <Text style={styles.namethingy}> {name}  </Text>
        <Image source={require('./profile.jpeg')} style={styles.thumbnail} />
      </View>

          );
        }
