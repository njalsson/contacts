import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,

    },
    infocontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    mobile: {
        width: '100%',
        padding: 20,
        paddingTop: 50,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    phonenr: {
        fontWeight: 'bold',
        color: '#6C85DD',
        fontSize: 20,
    }
    ,
    mobileheader: {
        position: 'absolute',
        top: 20,
        left: 20,
        fontWeight: 'bold',
        // color: '#6C85DD',
        fontSize: 16,
    },
    button: {
    },
});