import { StyleSheet, Dimensions } from 'react-native';
import { darkBlue } from '../../styles/colors';
import fonts from '../../styles/fonts';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: winWidth,
        height: 50,
        backgroundColor: darkBlue,
        paddingBottom: 5,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: 'center',
    },
    safeArea: {
        flexDirection: 'row',
        backgroundColor: darkBlue,
        width: '100%',
    },
    navigation: {
        ...fonts.h1,
        alignSelf: 'center',
    },
});
