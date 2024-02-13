import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {ThemeContextProvider} from "./context/ThemeContext"
import Router from './src/Router';
import { UserContextProvider } from './context/UsersContext';

export default function App() {

 
  return ( // value değeri bu provider altındaki herhangi bir component üzerinden erişilebilir ve obje olarak hem state değerini ve fonks. gönderdik. Her yerden bu değer değişebilsin diye
    // <ThemeContextProvider>  
    //    <Router />
    // </ThemeContextProvider>

    <UserContextProvider>
        <Router />
    </UserContextProvider>
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
