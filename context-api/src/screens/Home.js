import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {useTheme} from '../../context/ThemeContext'
import { useLang } from '../../context/LanguageContext';

export default function Home({navigation}) {

    const {theme} = useTheme();
    const {lang}=useLang();
   

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text> Tema: {theme} </Text>
      <Text> Dil: {lang} </Text>
      <Button title='Go to the About' onPress={()=>navigation.navigate("About")} />
    </View>
  )
}

const styles = StyleSheet.create({})