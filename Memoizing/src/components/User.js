import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = ({user}) => {
  return (
    <View>
      <Text>User</Text>
      <Text>
        {
            JSON.stringify(user)
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default User;

