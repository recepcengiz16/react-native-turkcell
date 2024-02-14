import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useCounter } from '../context/CounterContext'

export default function Counter() {

    const {count,setCount} = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {count} </Text>
      <Button title='Artır' onPress={ () => setCount(count+1) } />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:16
    }
})