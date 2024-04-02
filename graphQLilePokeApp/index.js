/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Router from './Router';
import {name as appName} from './app.json';


const client = new ApolloClient({
    uri: 'https://graphql-pokemon.vercel.app/',
    cache: new InMemoryCache()
  });

const App = ()=> {
   
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
    
}

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Router);
