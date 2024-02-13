import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Item({user}) {
  return (
    <View>
        <TouchableOpacity>
            <Text>{user.name}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})