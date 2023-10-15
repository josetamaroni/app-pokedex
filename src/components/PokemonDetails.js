import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FadeInImage } from './FadeInImage'

export const PokemonDetails = ({ pokemon }) => {

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
            ...StyleSheet.absoluteFillObject,
            
        }}
    >
        <View
            style={{
                ...styles.container,
                marginTop: 370
            }}
        >
            <Text style={ styles.title }>Types</Text>
            <View style={{ flexDirection: 'row'}}>
                {
                    pokemon.types.map( ({type}) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10
                            }} 
                            key={type.name}
                        >
                            { type.name }
                        </Text>
                    ))
                }
            </View>

            {/* Peso */}
            <Text style={ styles.title }>Peso</Text>
            <Text style={ styles.regularText }>{pokemon.weight}kg</Text>
        </View>

        {/* Sprites */}
        <View
            style={{
                ...styles.container
            }}
        >
            <Text style={ styles.title }>Sprites</Text>
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprite }
                />
                <FadeInImage
                    uri={ pokemon.sprites.front_shiny }
                    style={ styles.basicSprite }
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_shiny }
                    style={ styles.basicSprite }
                />
            </ScrollView>
        </View>
        
        {/* Habilidades */}
        <View
            style={ styles.container}
        >
            <Text style={ styles.title }>Abilities Basic</Text>
            <View style={{ flexDirection: 'row'}}>
                {
                    pokemon.abilities.map( ({ability}) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10
                            }} 
                            key={ability.name}
                        >
                            { ability.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Movimientos */}
        <View
            style={ styles.container}
        >
            <Text style={ styles.title }>Moves</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    pokemon.moves.map( ({move}) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10
                            }} 
                            key={move.name}
                        >
                            { move.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/* Stats */}
        <View
            style={ styles.container}
        >
            <Text style={ styles.title }>Stats</Text>
            <View >
                {
                    pokemon.stats.map( (stat,i) => (
                        <View key={ stat.stat.name } style={{ flexDirection: 'row' }}>
                            <Text style={{ ...styles.regularText, width: 160 }}>
                                { stat.stat.name }
                            </Text>
                            <Text style={{ ...styles.regularText, fontWeight: 'bold' }}>
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* Sprite final */}
            <View
                style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}    
            >
                <FadeInImage
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    regularText: {
        fontSize: 16
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})
