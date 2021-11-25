import { StyleSheet } from 'react-native';
import { lighterBlue, successGreen, errorRed } from '../../styles/colors';

export default StyleSheet.create({

    modalView: {
        position: 'absolute',
        top: '30%',
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        width: 100,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    actionButton: {
        backgroundColor: successGreen,

    },
    cancellButton: {
        backgroundColor: lighterBlue,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
