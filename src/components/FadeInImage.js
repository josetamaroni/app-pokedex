import React, { useState } from 'react'
import { ActivityIndicator, Animated, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';
import { lightTheme } from '../theme/themes';


export const FadeInImage = ({ uri, style = {} }) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    const onError = (err) => {
        setIsLoading( false );
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style,
        }}>
            {
                isLoading && 
                    <ActivityIndicator 
                        style={{ position: 'absolute' }} 
                        color={ lightTheme.colors.primary }
                        size={ 30 }
                    />
            }

            <Animated.Image 
                source={{ uri }}
                onError={ onError } 
                onLoad={ finishLoading }
                style={{
                    ...style,
                    opacity
                }}
            />
        </View>
    )
}