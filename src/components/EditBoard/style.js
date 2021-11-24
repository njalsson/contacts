import { StyleSheet, Dimensions } from 'react-native';
import { lightBlue, successGreen, errorRed } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
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
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    edit: {
        backgroundColor: successGreen,
    },
    cancell: {
        backgroundColor: errorRed,
    },
});
