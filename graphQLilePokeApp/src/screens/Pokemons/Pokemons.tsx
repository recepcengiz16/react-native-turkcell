import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';

import {useQuery} from '@apollo/client';
import {gql} from '@apollo/client';

const pokemon_query = gql`
  {
    pokemons(first:10){
      id
      name
    }
  }
`;

export default function Pokemons(): React.JSX.Element {

  const {error,loading,data} = useQuery(pokemon_query);

  if (loading) {
    return (
      <View>
         <ActivityIndicator size={25} />
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text>Error..</Text>
      </View>
    )
  }

  return (
    <View>
      {/* <FlatList
        data={data.pokemons}
        renderItem={({item})=><Text>{item.name}</Text>}
        keyExtractor={(item)=>item.id}
      /> */}
      <Text>Recep</Text>
    </View>
  );
}