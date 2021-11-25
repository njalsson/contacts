import { StyleSheet, Dimensions } from 'react-native';
import { lighterBlue, successGreen, errorRed } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
export default StyleSheet.create({

    button: {
        borderRadius: 20,
        padding: 10,
        width: 100,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    
    delete: {
        position: 'absolute',
        backgroundColor: errorRed,
        top: -10,
        left: -10,
        width: 45,
        height: 45,
        borderRadius: 50,
    },
});
