import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Pokemons from './src/screens/Pokemons';

const Stack = createNativeStackNavigator();

export default function Router(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokemons" component={Pokemons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
