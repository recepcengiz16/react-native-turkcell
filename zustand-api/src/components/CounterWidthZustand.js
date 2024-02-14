import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import useStore from '../store/useStore'

export default function CounterWidthZustand() {

    const data = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {data.count} </Text>
      {/* <Button title='Artır' onPress={ () => setCount(count+1) } /> */}
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