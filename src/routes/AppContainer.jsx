import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Contacts from '../views/ContactsScreen/ContactsScreen';
import Contact from '../views/ContactScreen/ContactScreen';
import AddContactModalScreen from '../views/AddContactModalScreen/AddContactModalScreen';
import SettingsModalScreen from '../views/SettingsModalScreen/SettingsModalScreen';
export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contacts">
                <Stack.Group>
                    <Stack.Screen
                        name="Contacts"
                        component={Contacts}
                        options={({navigation}) => {
                            return {headerRight: () => (<Button title="add" onPress={() => navigation.navigate('Add contact')}/>)};
                        }}
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
                    <Stack.Screen
                        name="Settings"
                        component={SettingsModalScreen}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
