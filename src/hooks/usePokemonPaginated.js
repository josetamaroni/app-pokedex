import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";



export const usePokemonPaginated = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [simplePokemonList, setSimplePokemonList] = useState([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async() => {
        setIsLoading(true);
        const resp = await pokemonApi.get(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = ( pokemonList ) => {
        const newPokemonList = pokemonList.map( ({name,url}) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            
            return {
                id,
                name,
                picture
            }
        });
        setSimplePokemonList([...simplePokemonList,...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isLoading,
        loadPokemons,
        simplePokemonList
    }
}
