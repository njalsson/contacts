import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    image: {
        marginTop: 70,
        justifyContent: 'flex-start',
        height: 80,
        width: 80,

        borderRadius: 50,
    },
    mobile: {
        marginTop: 100,
        width: '90%',
        height: 70,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        borderRadius: 10
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    phonenr: {
        // fontWeight: 'bolder',
        marginLeft: 15,
        marginTop:9,
        color: '#6C85DD',
        fontSize: 15,
    }
    ,
    mobileheader: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop:9,
        // color: '#6C85DD',
        // fontSize: 10,
    },
    button: {
        height: 40,
        width: 100,
        marginLeft: 150,
        marginTop: 300,
        color: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#7BD389'

    },
});