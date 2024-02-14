import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import useStore from '../store/useStore'

export default function CounterWidthZustand() {

   // const data = useStore(); içerisinde eğer başka state de varsa o da değişirse yine component render edilir. Bu da sıkıntılı. Bu yüzden alttaki gibi kullanacağımız şeyleri yazmamız lazım

   const count = useStore(state=>state.count);
   const increase = useStore(state=>state.increase);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {count} </Text>
      <Button title='Artır' onPress={ increase } />
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