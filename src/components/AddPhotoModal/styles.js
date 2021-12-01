import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    icons: {
        margin: 20,
        padding: 20,
        backgroundColor: 'lightblue',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'blue'
    }
});