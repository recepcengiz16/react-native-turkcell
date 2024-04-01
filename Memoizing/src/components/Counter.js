import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Header from './Header';

export default function Counter() {

    const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Header />

      <Text>{count}</Text>
      <Button title='Artır' onPress={()=>setCount(count+1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center"
  },
  text: {
    fontSize:24
  }
})