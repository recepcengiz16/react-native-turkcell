/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {ApolloProvider} from "@apollo/react-hooks";
import { ApolloClient, HttpLink } from 'apollo-boost';

import Router from './Router';
import {name as appName} from './app.json';

const client = new ApolloClient({
    link: new HttpLink({
        uri:"https://grapql-pokemon.now.sh"
    }),
    cache:new InMemoryCache()
}) 

const App = ()=> {
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
}

AppRegistry.registerComponent(appName, () => App);
