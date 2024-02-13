import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ThemeContext from "./context/ThemeContext"
import Router from './src/Router';

export default function App() {

  const [theme, setTheme] = useState(""); 

  return ( // value değeri bu provider altındaki herhangi bir component üzerinden erişilebilir ve obje olarak hem state değerini ve fonks. gönderdik. Her yerden bu değer değişebilsin diye
    <ThemeContext.Provider value={{theme,setTheme}}>  
       <Router />
    </ThemeContext.Provider>
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
