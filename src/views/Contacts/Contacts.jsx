import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'
import { useEffect } from 'react';
import * as Contacts from 'expo-contacts';

export default function Contactso({navigation: { navigate } }) {
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
            }
          }
        })();
      }, []);
    var i = [0,1,2,3,4,5,6]
    

    return (
        
        <ScrollView>
            {i.map(j => (
                <><TouchableOpacity onPress={() => { navigate('Contact') } }>
                    <View style={styles.contactCard}>
                        <Text style={styles.name} key={(j+451-j*j)*11}>Daníel Freyr Gylfason {j}</Text>
                        <Image style={styles.image}
                            source={require("./l60Hf.png")} />
                    </View>
                </TouchableOpacity><TouchableOpacity onPress={() => { navigate('Contact') } }>
                        <View style={styles.contactCard}>
                            <Text style={styles.name} key={(j+223-j*j)*14}>Aron Bergur Jóhannsson {j+1}</Text>
                            <Image style={styles.image}
                                source={require("./l60Hf.png")} />
                        </View>
                    </TouchableOpacity><TouchableOpacity onPress={() => { navigate('Contact') } }>
                        <View style={styles.contactCard}>
                            <Text style={styles.name} key={(j+852-j*j)*49}>Friðrik Njálsson {j+2}</Text>
                            <Image style={styles.image}
                                source={require("./l60Hf.png")} />
                        </View>
                    </TouchableOpacity></>
        ))}
        </ScrollView>

        
    )
}

