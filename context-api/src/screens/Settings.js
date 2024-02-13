import { Button, StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function Settings() {

  const {theme,setTheme} = useContext(ThemeContext);

  return (
    <View>
      <Text>Theme: {theme}</Text>

      <Button title='Temayı Değiştir' onPress={()=>setTheme("light")} />
    </View>
  )
}

const styles = StyleSheet.create({})