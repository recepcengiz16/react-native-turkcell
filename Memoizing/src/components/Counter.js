import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useMemo,useCallback} from 'react'
import Header from './Header';

export default function Counter() {

    const [count, setCount] = useState(0);

    //usememo array ve objeler için değişim olmasın diye. 
    //usecallback de fonksiyonlar için react.memo da primitif değerler için property değerleri değişince tekrar render edilsin diye 
    const user = useMemo(()=>{
      return {
        id:1,
        name:"Recep",
        count
      }
    },[count]); //1. parametre arrow fonksiyon, 2. parametre de bağımlı değişkenlerin olduğu array. count değeri değişirse. useEffect gibi düşün bunu da aynı eğer boş array olsaydı bu component mount edildiğinde user oluşacaktı, şimdi de count değişince user objesi değişecek. 

    const increment = useCallback((amount)=>{
      setCount( (prev) => prev+amount); // bu şekilde yazmak lazım count +1 değil fonks şeklinde yazmak lazım 
    },[]); //bu da aynı useMemo gibi kullanımı var. Fakat bu fonks. larda kullanılıyor. Fonks da referansa sahip olduğu için memoda referans değişti mi diye bakıyor.

  return (
    <View style={styles.container}>
      <Header increment={increment} />

      <User user={user} />

      <Text>{count}</Text>
      <Button title='Artır' onPress={()=>increment(1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center"
  },
  text: {
    fontSize:24
  }
})