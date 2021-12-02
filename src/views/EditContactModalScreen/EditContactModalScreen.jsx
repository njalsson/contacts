import React, { useEffect, useState } from 'react';
import { Button, } from 'react-native';

import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService'; 
import ModifyContact from '../../components/ModifyContact/ModifyContact';
import { Children } from 'react';


export default function EditContactModalScreen({ navigation, route }) {
    const [showAddPhoto, setShowAddPhoto] = useState(false);
    const [inputs, setInputs] = useState({});



    const loadContact = async fileName => {
        const currentContact = await fileService.loadContact(fileName);
        setInputs(currentContact);
    };

    useEffect(() => {
        const {fileName} = route.params;
        loadContact(fileName);
    },[]);

    const doneButton = () => {
        navigation.setOptions({headerRight: () => {return (
            <Button
                disabled={inputs.name && inputs.phoneNumber ? false : true}
                title="done"
                onPress={async () => {
                    const name = await fileService.editContact({
                        ...inputs,
                    });
                    navigation.navigate('Contact', {fileName: name, action: "edit"});
                }}    
            />
        
        );}});
    };
    
    useEffect(() => {
        doneButton();
    }, [inputs]);


    const onInputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const takePhoto = async () => {
        const img = await imageService.takePhoto();
        if (img.length > 0) { 
            onInputHandler('image', img);
            setShowAddPhoto(false);
        }
    };

    const selectFromCameraRoll = async () => {
        const img = await imageService.selectFromCameraRoll();
        if (img.length > 0) { 
            onInputHandler('image', img);
            setShowAddPhoto(false);
        }

    };

    return (
        <ModifyContact
            setShowAddPhoto={setShowAddPhoto}
            onInputHandler={onInputHandler}
            inputs={inputs}
            photo={inputs.image}
            showAddPhoto={showAddPhoto}
            takePhoto={takePhoto}
            selectFromCameraRoll={selectFromCameraRoll}
        >
            <Button
                title="Delete contact"
                color="red"
                onPress={() => {
                    fileService.remove(inputs.fileName);
                    navigation.navigate('Contacts', {id: inputs.id, action: 'delete'});
                }}/>
        </ModifyContact>
    );
}

