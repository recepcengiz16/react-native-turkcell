import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function Home({navigation}) {

    const data = useContext(ThemeContext);
    console.log(data)

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text> Ana Sayfa </Text>
      <Button title='Go to the About' onPress={()=>navigation.navigate("About")} />
    </View>
  )
}

const styles = StyleSheet.create({})