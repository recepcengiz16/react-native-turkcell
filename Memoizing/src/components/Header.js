import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({increment}) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Button title='Artır' onPress={()=>increment(5)} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth:2,
        width:"100%"
    }
})

export default React.memo(Header); // ilgili componentin önceki propertyleri ve yeni gelen propertyleri karşılaştırır ve bunlar aynı ise tekrar renden etmez. Primitif tiplerde tercih edilebilir. Çünkü obje ve dizide algılamıyor içeriği aynı olsa bile

// React.memo olmalı ki usememo ve usecallback çalışabilsin yoksa bir anlamı olmuyor.
