import * as Contacts from 'expo-contacts';
import { number } from 'prop-types';

export const getContactsFromPhone = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
            return Promise.all(data.map(async contact => {
                const phoneNumber = 'phoneNumbers' in contact ? contact.phoneNumbers[0].digits : "";
                return {
                    id: contact.id.split(":")[0],
                    name: contact.name,
                    image: contact.imageAvailable ? contact.rawImage.uri : "",
                    phoneNumber: phoneNumber,
                }
            }));
        }
    }
};