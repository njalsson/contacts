import React from 'react';
import { Image } from 'react-native';
import styles from './style';

export default function thumbnailPhoto({ image }) {
    return (
        <Image
            style={styles.image}
            source={{ uri: image }}
            resizeMode="cover"
        />
    );
}
