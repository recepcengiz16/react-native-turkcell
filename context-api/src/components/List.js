import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from './Item'
import { useUsers } from '../../context/UsersContext';
import Message from './Message';

export default function List() {

  const {users} = useUsers();

  return (
    <View>

     {
        users.length === 0 &&  <Message message="No item" />
     }

      <FlatList 
        data={users} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <Item user={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})