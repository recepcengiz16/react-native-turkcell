import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function Form() {

    const [username, setUsername] = useState("")


  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={(name)=>setUsername(name)} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:10
    },
    input:{
        borderWidth:1,
        padding:10,
        fontSize:24,
        width:"100%"
    }
})