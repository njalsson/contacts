import { StyleSheet } from 'react-native';
import { lightBlue, darkBlue } from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        minWidth: '100%',
        alignSelf: 'flex-start',
        paddingTop: 8,
        backgroundColor: lightBlue,
        padding: 20,
        paddingBottom: 50,
        marginBottom: 20,
        borderRadius: 5,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    subcontainer: {
        flex: 2,
        flexDirection: 'column',
    },
    name: {
        ...fonts.h1,
        marginBottom: 10,
        paddingRight: 20,
    },
    description: {
        ...fonts.text,
        paddingRight: 20,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        elevation: 5,
        zIndex: 4,
    },
});
