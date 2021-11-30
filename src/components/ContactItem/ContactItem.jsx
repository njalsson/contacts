import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';



export default function ContactItem({name}) {
    return (
      <View>
        <Text> {name}  </Text>
        <Text></Text>
      </View>

          );
}
