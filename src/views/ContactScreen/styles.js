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
        fontSize: 16,
    },

    callbutton: {
        backgroundColor: '#4BB543',
        marginRight: 20,
        padding: 13,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4BB543'
    },
    smsbutton: {
        backgroundColor: '#6495ED',
        marginLeft: 20,

        padding: 15,
        borderRadius: 50,
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',   

    },
    divider: {
        borderWidth: 1,
        borderTopColor: 'rgba(255,0,0,0.0)',
        borderRightColor: 'rgba(255,0,0,0.0)',
        borderBottomColor: 'rgba(255,0,0,0.0)',
        borderLeftColor: 'lightgrey',

    },
    noimage: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        height: 128, 
        width: 128, 
        borderRadius: 100,
        overflow: 'hidden',
    },
    noimageletter: {
        fontSize: 40,
    }

});