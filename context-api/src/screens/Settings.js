import { Button, StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import {useTheme} from '../../context/ThemeContext'

export default function Settings() {

  const {theme,setTheme} = useTheme();

  return (
    <View>
      <Text>Theme: {theme}</Text>

      <Button title='Temayı Değiştir' onPress={()=>setTheme("light")} />
    </View>
  )
}

const styles = StyleSheet.create({})