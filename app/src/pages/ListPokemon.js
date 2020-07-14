import React from "react"
// import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import { PokemonList } from '../components/pokemon';

//const useStyles = makeStyles({
//     root: {
//         width: "200px",
//         marginBottom: "20px"
//     },
//     icon: {
//         padding: "0",
//     },
// });

const ListPokemon = () => {
    //const classes = useStyles();

    return (
        <Box m={2}>
            <h2>Pokémons</h2>
            <PokemonList pokemons={[]} />
        </Box>)
}

export default ListPokemon;
