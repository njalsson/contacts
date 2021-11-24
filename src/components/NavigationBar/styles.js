import { StyleSheet, Dimensions } from 'react-native';
import { darkBlue } from '../../styles/colors';
import fonts from '../../styles/fonts';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: winWidth,
        height: 50,
        backgroundColor: darkBlue,
        paddingBottom: 5,
    },
    safeArea: {
        backgroundColor: darkBlue,
    },
    navigation: {
        ...fonts.title,
        alignSelf: 'center',
    },
});
