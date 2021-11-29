import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Contacts from '../views/Contacts/Contacts';
import Contact from '../views/Contact/Contact';

export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contacts">
                <Stack.Screen
                    name="Contacts"
                    component={Contacts}
                    options={{
                        headerRight: () => (<Button title="add" />)
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
