import React, { useEffect, useRef, useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/core';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

import { FadeInImage } from './FadeInImage';
import { lightTheme } from '../theme/themes';

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({pokemon}) => {

    const [bgColor, setBgColor] = useState('grey');
    const navigation = useNavigation();
    const isMounted = useRef(true); // esto es para asegurarse de colocar el color del Bg cuando el componente este montado
    
    useEffect(() => {    
        ImageColors.getColors( pokemon.picture , {
            fallback: 'grey',
            // cache: true,
            // key: pokemon.picture,
        })
        .then( colors => {
            // console.log('hola', colors)
            // if( !isMounted ) return;

            // ( colors.platform === 'android' )
            //     ? setBgColor( colors.dominant || 'grey' )
            //     : setBgColor( colors.background || 'grey' )
            colors.platform === 'android';
            switch (colors.platform) {
                case 'android':
                    setBgColor(colors.dominant || bgColor);
                    break;
                case 'ios':
                    setBgColor(colors.background || bgColor);
                    break;
                case 'web':
                    setBgColor(colors.dominant || bgColor);
                    break;
                default:
                    setBgColor(bgColor);
                    break;
            }
        });

        return () => {
            isMounted.current = false;
        }

    }, [])

    return (
        <TouchableOpacity
            activeOpacity={ 0.4 }
            onPress={ () => navigation.navigate('PokemonScreen', { 
                pokemon,
                color: bgColor
             })}
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