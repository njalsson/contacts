import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

export default function Contacts({navigation: { navigate } }) {
    return (
        <View>
            <Text>This is the Contacts screen loaded from src/views/Contacts using navigation</Text>
            <Button
                title="Checkout contact view"
                onPress={() => { navigate('Contact')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({});
