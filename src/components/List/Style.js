import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    List: {
        padding: 5,
        marginTop: 10,
    },
    listHeader: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 20,
        marginBottom: 5,
    },
    container: {
        position: 'relative',
        flexDirection: 'column',
        minWidth: '100%',
        alignSelf: 'flex-start',
        paddingTop: 8,
        padding: 20,
        borderRadius: 5,
    },
    editButton: {
        marginTop: 20,
        width: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

});
