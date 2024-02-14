
import { StyleSheet, View } from 'react-native';
import Counter from './src/components/Counter';
import { CounterContextProvider } from './src/context/CounterContext';
import CounterWidthZustand from './src/components/CounterWidthZustand';

export default function App() {// zustand api de context api gibi provider ve sarmalanmasına gerek yok. Her bir context için hook yazmamız gerekliydi vs. Zustondla beraber herhangi bir state i kaydedip onu kaldığı yerden tekrardan kullanabiliriz persist özelliği ile. vue js deki store gibi düşünebilirsin. Bir artısı da normalde context apide provider altındaki herhangi bir state güncellendiğinde altındaki her component tekrar render edilir.
  return (
    <CounterContextProvider>
        <View style={styles.container}>
          {/* <Counter /> */}
          <CounterWidthZustand />
        </View>
    </CounterContextProvider>
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
