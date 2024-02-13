import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function List() {
  return (
    <View>
      <FlatList 
        data={[{id:1,name:"Ceylan"},{id:2,name:"Recep"}]} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <Item user={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})