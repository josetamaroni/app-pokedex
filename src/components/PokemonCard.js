import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
// import { ImageColors } from 'react-native-image-colors';

import { FadeInImage } from './FadeInImage';
import { lightTheme } from '../theme/themes';

export const PokemonCard = ({pokemon}) => {

    const [bgColor, setBgColor] = useState('grey');
    const windowWidth = Dimensions.get('window').width;

    // useEffect(() => {    
    //     ImageColors.getColors( pokemon.picture , {fallback: 'grey'})
    //     .then( colors => {
    //         if ( colors.platform === 'android') {
    //             setBgColor( colors.dominant || 'grey' )
    //         }else{
    //             setBgColor( colors.background || 'grey' )
    //         }
    //     })
    // }, [])

    return (
        <TouchableOpacity
            activeOpacity={ 0.4 }
        >
            <View style={{
                ...lightTheme.card.cardContainer,
                backgroundColor: bgColor,
                width: windowWidth * 0.4
            }}>
                <View>
                    <Text
                        style={{
                            ...lightTheme.card.name
                        }}
                    >
                        { pokemon.name + '\n#' + pokemon.id }
                    </Text>
                </View>
                <View
                    style={{
                        ...lightTheme.card.pokebolaContainer
                    }}
                >
                    <Image
                        source={ require('../../assets/pokebola-blanca.png') }
                        style={{
                            ...lightTheme.card.pokebola
                        }}
                    />
                </View>
                <FadeInImage
                    uri={ pokemon.picture }
                    style= {{
                        ...lightTheme.card.pokemonImage
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}