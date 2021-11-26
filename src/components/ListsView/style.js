import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 5,

        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    },
    backbutton: {
        color: 'white',
        overflow: 'hidden',
        borderRadius: 10,

        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 8,

    },
    addButton: {
        position: 'absolute',
        elevation: 2,
        bottom: 50,
    },
});
