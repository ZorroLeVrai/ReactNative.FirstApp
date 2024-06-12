import React from "react"
import {Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  }
});

export default function DisplayText({text, size=40}) {
  return <Text style={{...styles.text, fontSize: size}}>{text}</Text>
}