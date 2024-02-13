import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Item({user}) {
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})