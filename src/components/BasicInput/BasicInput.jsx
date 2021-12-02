/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import styles from './style';
export default function BasicInput({onChange, value, placeholder}) {
    const [focused, setFocused] = useState(false);

    return (
        
        <TextInput
            style={focused ? [styles.input, styles.focused] : styles.input}
            placeholderTextColor="#6C757D"
            autoCapitalize='words'
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onEndEditing={() => setFocused(false)}
        />
    );
}

// BasicInput.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired
// };
