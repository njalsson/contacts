import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

<<<<<<< HEAD
import Contactso from '../views/Contacts/Contacts';
import Contact from '../views/Contact/Contact';
=======
import Contacts from '../views/ContactsScreen/ContactsScreen';
import Contact from '../views/ContactScreen/ContactScreen';
import AddContactModalScreen from '../views/AddContactModalScreen/AddContactModalScreen';
>>>>>>> contacts

export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contacts">
<<<<<<< HEAD
                <Stack.Screen
                    name="Contacts"
                    component={Contactso}
                    options={{
                        headerRight: () => (<Button title="add" />)
                    }}
=======
                <Stack.Group>
                    <Stack.Screen
                        name="Contacts"
                        component={Contacts}
                        options={({navigation}) => {
                            return {headerRight: () => (<Button title="add" onPress={() => navigation.navigate('Add contact')}/>)};
                        }}
>>>>>>> contacts
                    />
                    <Stack.Screen
                        name="Contact"
                        component={Contact}
                        options={{
                            title: false,
                            headerRight: () => (<Button title="edit" />),
                        }}
                    />
                </Stack.Group>
                <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen
                        name="Add contact"
                        component={AddContactModalScreen}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
