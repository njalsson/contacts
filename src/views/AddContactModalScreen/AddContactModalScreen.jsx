import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Platform} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import BasicInput from '../../components/BasicInput/BasicInput';
import ThumbnailPhoto from '../../components/ThumbnailPhoto/ThumbnailPhoto';
import defaultImage from '../../resources/images/default.png';
import AddPhotoModal from '../../components/AddPhotoModal/AddPhotoModal';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService'; 
import ModifyContact from '../../components/ModifyContact/ModifyContact';


export default function AddContactModalScreen({ navigation }) {
    const [showAddPhoto, setShowAddPhoto] = useState(false);
    const [inputs, setInputs] = useState({
        'name': '',
        'phoneNumber': '',
    });

    const doneButton = () => {
        navigation.setOptions({headerRight: () => {return (
            <Button
                disabled={inputs.name && inputs.phoneNumber ? false : true}
                title="done"
                onPress={async () => {
                    const name = await fileService.addContact({
                        ...inputs,
                        image: photo,
                    });
                    navigation.navigate('Contacts', {fileName: name, action: "add"});
                }}    
            />
        
        );}});
    };
    
    useEffect(() => {
        doneButton();
    }, [inputs]);

    const [photo, setPhoto] = useState('');

    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const takePhoto = async () => {
        const img = await imageService.takePhoto();
        if (img.length > 0) { 
            setPhoto(img);
            console.log(img); 
            setShowAddPhoto(false);
        }
    };

    const selectFromCameraRoll = async () => {
        const img = await imageService.selectFromCameraRoll();
        if (img.length > 0) { 
            setPhoto(img);
            setShowAddPhoto(false);
        }

    };

    return (
        <ModifyContact
            setShowAddPhoto={setShowAddPhoto}
            onInputHandler={onInputHandler}
            inputs={inputs}
            photo={photo}
            setPhoto={setPhoto}
            showAddPhoto={showAddPhoto}
            takePhoto={takePhoto}
            selectFromCameraRoll={selectFromCameraRoll}
        />
    );
}


AddContactModalScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};