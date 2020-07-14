import React from "react"
import { Box } from "@material-ui/core"
import { PokemonList } from '../components/pokemon';

const ListPokemon = () => {
    return (
        <Box m={2}>
            <h2>Pokémons</h2>
            <PokemonList pokemons={[]} />
        </Box>)
}

export default ListPokemon;
