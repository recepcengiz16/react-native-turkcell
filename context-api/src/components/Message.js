import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropType from "prop-types"

export default function Message({bgColor,message}) {
  return (
    <View style={[styles.container,{backgroundColor:bgColor}]}>
      <Text style={styles.text}>{message}</Text>

    </View>
  )
}

Message.prototype = {
    bgColor: PropType.string,
    message: PropType.string
}

Message.defaultProps =  {
    bgColor:"orange"
}

const styles = StyleSheet.create({
    container:{
        borderColor:"#ddd",
        borderWidth:1,
        margin:10
    },

    text:{
        fontSize:16
    }
})