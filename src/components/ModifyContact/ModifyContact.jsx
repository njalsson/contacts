/* eslint-disable react/prop-types */
import React from 'react';
import { Button, View, KeyboardAvoidingView, Platform} from 'react-native';
import ThumbnailPhoto from '../ThumbnailPhoto/ThumbnailPhoto';
import BasicInput from '../BasicInput/BasicInput';
import AddPhotoModal from '../AddPhotoModal/AddPhotoModal';
import styles from './styles';
export default function ModifyContact({
    setShowAddPhoto, onInputHandler, inputs, photo, showAddPhoto, takePhoto, selectFromCameraRoll, children
}) {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
            <View style={styles.imageContainer}>
                <ThumbnailPhoto
                    customStyle={{height: 128, width: 128, borderRadius: 100,}}
                    image={photo ? photo : ''}
                />
                <Button title="Edit photo" onPress={() => setShowAddPhoto(!showAddPhoto)}/>
            </View>
            <View style={styles.inputContainer}>
                <BasicInput
                    onChange={(text) => onInputHandler('name', text)}
                    placeholder="name"
                    value={inputs.name}
                />
                <BasicInput
                    onChange={(text) => {
                        
                        text = text.replace(/[^0-9+]/g, '');
                        onInputHandler('phoneNumber', '' + text);
                    }}
                    placeholder="phone number"
                    value={inputs.phoneNumber}
                />
            </View>
            {children}
            {showAddPhoto ? 
                (<AddPhotoModal
                    showModal={showAddPhoto}
                    setShowModal={setShowAddPhoto}
                    takePhoto={takePhoto}
                    selectPhoto={selectFromCameraRoll}
                />) : <></>
            }
        </KeyboardAvoidingView>
    );
}

