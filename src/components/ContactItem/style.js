import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    contactCard: {
        position: 'relative',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '95%',
        height: 60,
        marginTop: 10,
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
    image: {
        // flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 50,
        // marginLeft: '55%',
        justifyContent: 'flex-start',
        height: 30,
        width: 30,

        borderRadius: 50,
    },

    name: {
        width: '85%',
        marginLeft: 5,
        marginTop: 20,
        fontSize: 17
    },

});