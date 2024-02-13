import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

export default function Form() {
  return (
    <View>
      <TextInput value='Test' style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        width:"100%",
        height:40
    }
})