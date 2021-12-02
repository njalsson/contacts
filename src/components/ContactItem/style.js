import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 20,
        marginTop: 0,
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
        width: '85%',
        fontSize: 17,
        marginLeft: 10
    },
    noimage: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        // justifyContent: 'flex-start',
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    noimageletter: {
        fontSize: 20,
        // fontWeight: 'bold'
    }

});