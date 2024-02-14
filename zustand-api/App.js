import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {// zustand api de context api gibi provider ve sarmalanmasına gerek yok. Her bir context için hook yazmamız gerekliydi vs. Zustondla beraber herhangi bir state i kaydedip onu kaldığı yerden tekrardan kullanabiliriz. vue js deki store gibi düşünebilirsin.
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
