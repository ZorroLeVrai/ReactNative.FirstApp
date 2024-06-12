import React from "react"
import {View} from "react-native"
import DisplayText from "./DisplayText";

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2,
      }}/>
      <View style={{
        backgroundColor: 'gold',
        flex: 1,
      }}>
        <DisplayText text="Hello!"/>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        flex: 1,
      }}/>
    </View>
  );
}