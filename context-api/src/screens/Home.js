import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import LanguageContext from '../../context/LanguageContext';

export default function Home({navigation}) {

    const {theme} = useContext(ThemeContext);
    const {lang}=useContext(LanguageContext);
   

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text> Tema: {theme} </Text>
      <Text> Dil: {lang} </Text>
      <Button title='Go to the About' onPress={()=>navigation.navigate("About")} />
    </View>
  )
}

const styles = StyleSheet.create({})