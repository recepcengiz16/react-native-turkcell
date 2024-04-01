import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth:2,
        width:"100%"
    }
})

export default React.memo(Header); // ilgili componentin önceki propertyleri ve yeni gelen propertyleri karşılaştırır ve bunlar aynı ise tekrar renden etmez.

