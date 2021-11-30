import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styles from "./styles";


export default function Contact() {
  return (
    <View style={styles.container}>

      <Image style={styles.image}
        source={ require("./l60Hf.png") }

      />
      <Text style={styles.name}>Daníel Freyr Gylfason</Text>
      <View style={styles.mobile}>
          <Text style={styles.mobileheader}>mobile</Text>
          <Text style={styles.phonenr}>866-0115</Text>
          <TouchableOpacity style={styles.button} >
          <Text>Call </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

