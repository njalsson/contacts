import React from 'react';
import { Image } from 'react-native';
import styles from './style';

export default function thumbnailPhoto({ image, customStyle}) {
    return (
        <Image
            style={[styles.image, customStyle]}
            source={image}
            resizeMode="cover"
        />
    );
}
