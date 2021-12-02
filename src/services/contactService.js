import * as Contacts from 'expo-contacts';
import { number } from 'prop-types';
import { Platform } from 'react-native';

export const getContactsFromPhone = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        console.log(data);
        if (data.length > 0) {
            if (Platform.OS === 'IOS') {
                return Promise.all(data.map(async contact => {
                    const phoneNumber = 'phoneNumbers' in contact ? contact.phoneNumbers[0].digits : "";
                    console.log(contact);
                    return {
                        id: contact.id.split(":")[0],
                        name: contact.name,
                        image: contact.imageAvailable ? contact.rawImage.uri : "",
                        phoneNumber: phoneNumber,
                    };
                }));
            }
            return Promise.all(data.map(async contact => {
                const phoneNumber = 'phoneNumbers' in contact ? contact.phoneNumbers[0].number : "";
                return {
                    id: contact.id,
                    name: contact.name,
                    image: contact.imageAvailable ? contact.image.uri : "",
                    phoneNumber: phoneNumber,
                };
            }));
        }
    }
};