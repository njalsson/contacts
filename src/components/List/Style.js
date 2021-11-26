import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    listHeader: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 20,
        marginBottom: 10,
    },
    container: {
        marginBottom: 20,
        position: 'relative',
        flexDirection: 'column',
        minWidth: '100%',
        alignSelf: 'flex-start',
        padding: 20,
        borderRadius: 5,
    },
    buttons: {
        marginTop: 20,
        width: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});
