import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);


  return (
    <View>
      <Text>{count}</Text>
      <Button title='Artır' onPress={alert("Merhaba")} />
    </View>
  )
}

const styles = StyleSheet.create({})