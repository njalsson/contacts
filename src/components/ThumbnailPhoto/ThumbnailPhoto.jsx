import React from 'react';
import { Image } from 'react-native';
import styles from './style';
import defaultImage from '../../resources/images/default.png';

export default function thumbnailPhoto({ image, customStyle}) {
    return (
        <Image
            style={[styles.image, customStyle]}
            source={image === '' ? defaultImage : {uri: image}}
            resizeMode="cover"
        />
    );
}
