import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#6C757D',
        marginBottom: 15,
    },

    name:{
        fontSize :18,
        flexWrap: 'wrap',
        flex: 1,
        marginRight: 10,
    },
});
