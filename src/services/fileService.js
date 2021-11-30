import * as FileSystem from 'expo-file-system';
import uuid from 'react-native-uuid';

const contactsDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
};

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactsDirectory);
};

const cleanName = name => {
    return name.replace(/[^\x00-\x7F]/g, "").replace(/[' ']/g, "_");
};

export const addContact = async contact => {
    const name = cleanName(contact.name);
    const id = uuid.v4();
    const filename = name + '-' + id + '.json';
    contact.id = id;
    contact.fileName = filename;
    await onException(() => FileSystem.writeAsStringAsync(`${contactsDirectory}/${filename}`, JSON.stringify(contact)));
    return filename;
};

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactsDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactsDirectory);
    }
};

export const loadContact = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${contactsDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.UTF8
    }));
};

export const getAllContacts = async () => {
    // Check if directory exists
    await setupDirectory();
    const result = await onException(() => FileSystem.readDirectoryAsync(contactsDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'contact',
            contact: JSON.parse(await loadContact(fileName))
        };
    }));
}