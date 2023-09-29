import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
    dark: false,
    colors: {
        primary: 'green',
        background: 'white',
        text: 'black'
    },
    globalMargin: {
        marginHorizontal: 20
    },
    pokeBolaBG: {
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        opacity: 0.2
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    card: {
        cardContainer: {
            marginHorizontal: 10,
            height: 120,
            width: 160,
            marginBottom: 25,
            borderRadius: 10
        },
        name: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            top: 15,
            left: 10
        },
        pokebolaContainer: {
            width: 120,
            height: 120,
            position: 'absolute',
            bottom: 0,
            right: 0,
            overflow: 'hidden',
            opacity: 0.5
        },
        pokebola: {
            width: 120,
            height: 120,
            position: 'absolute',
            bottom: -20,
            right: -20
        },
        pokemonImage: {
            width: 100,
            height: 100,
            position: 'absolute',
            right: -8,
            bottom: -5
        }
    }
})