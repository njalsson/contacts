import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(150, 161, 179, 0.4)',
        borderColor: 'rgba(48, 56, 55, 0.4)',
        borderRadius: 10,
        borderWidth: 1,
        width: 'auto',
        marginBottom: 20,
        padding: 15,
    },
    containerFinished: {
        backgroundColor: 'rgba(150, 161, 179, 0.3)',
        borderColor: 'rgba(48, 56, 55, 0.3)',
    },
    task: {
        overflow: 'hidden',
        color: 'black',

    },
    finishedtask: {
        overflow: 'hidden',
        color: 'rgba(0, 0, 0, 0.3)',
        textDecorationLine: 'line-through',

    },
});
