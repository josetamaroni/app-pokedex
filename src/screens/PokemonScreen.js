import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

export const PokemonScreen = ({ navigation, route }) => {

  const { pokemon, color } = route.params;
  const { top } = useSafeAreaInsets();

  const { isLoading, pokemon:pokemonFul} = usePokemon(pokemon.id);

  return (
    <View style={{ flex: 1 }}>
      {/* Header Container */}
      <View style={{
        ...style.headerContainer,
        backgroundColor: color
      }}>

        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={ 0.8 }
          onPress={ () => navigation.pop() }
          style={{
            ...style.backButton,
            top: top
          }}
        >
          <Ionicons name="arrow-back-outline" size={35} color="white" />
        </TouchableOpacity>

        {/* Nombre del Pokemon */}
        <Text
          style={{
            ...style.pokemonName,
            top: top + 40
          }}
        >
          { pokemon.name + '\n'}#{pokemon.id}
        </Text>

        {/* Pokebola blanca */}
        <Image
          source={ require('../../assets/pokebola-blanca.png') }
          style={{
            ...style.pokeball
          }}
        />

        <FadeInImage
          uri={ pokemon.picture }
          style={ style.pokemonImage }
        />
      </View>

      {/* Detalles y loading */}

      {
        isLoading
        ? (
          <View style={ style.loadingIndicator }>
            <ActivityIndicator
              color={ color }
              size={ 50 }
            />
          </View>
        )
        : <PokemonDetails pokemon={ pokemonFul }/>
      }
    </View>
  )
}

const style = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 35,
    left: 20
  },
  pokeball: {
    height: 280,
    width: 280,
    bottom: -10,
    opacity: 0.7
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})