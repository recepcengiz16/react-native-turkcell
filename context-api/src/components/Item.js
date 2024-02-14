import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useUsers} from "../../context/UsersContext"

export default function Item({user}) {

  const {removeUser} = useUsers();

  return (
    <View style={styles.item}>
        <TouchableOpacity>
          <Text>{user.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>removeUser(user.id)}>
          <Text style={styles.remove}>Sil</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  remove:{
    color:"red"
  }
})