import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import ContactItem from './../../components/ContactItem/ContactItem';
export default function Contacts({navigation: { navigate } }) {
    return (
        <View>
            <Text>This is the oContacts screen loaded from src/views/Contacts using navigations</Text>
            <ContactItem name="John"></ContactItem>
            <Button
                title="Checkout contact view"
                onPress={() => { navigate('Contact')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({});
