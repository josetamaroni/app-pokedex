import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { lightTheme } from '../theme/themes';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={ require('../../assets/pokebola.png') }
        style={ lightTheme.pokeBolaBG }
      />
      <View style={{ alignItems:'center' }}>
        <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={ 2 }
          ListHeaderComponent={(
            <Text
              style={{
                ...lightTheme.title,
                ...lightTheme.globalMargin,
                top: top + 20,
                marginBottom: top + 20
              }}
            >Pokedex</Text>
          )}
          renderItem={ ({item}) => <PokemonCard pokemon={item} /> }
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }

          ListFooterComponent={(
            <ActivityIndicator
              style={{ height:100 }}
              size={30}
              color={lightTheme.colors.primary}
            />
          )}
        />
      </View>
    </>
  )
}
