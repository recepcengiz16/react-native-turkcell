import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ThemeContext from "./context/ThemeContext"
import Router from './src/Router';

export default function App() {
  return ( // value değeri bu provider altındaki herhangi bir component üzerinden erişilebilir
    <ThemeContext.Provider value={"dark"}> 
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
