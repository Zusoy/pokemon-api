import React from 'react';
import { 
    Button, 
    ListItem, 
    ListItemText, 
    List,
    IconButton, 
    makeStyles 
} from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
    root: {
        width: "200px",
        marginBottom: "20px"
    },
    icon: {
        padding: "0",
    },
});

const PokemonList = ({ pokemons }) => {
    const classes = useStyles();

    return (
        <>
            <List className={classes.root}>
                {pokemons.map(pokemon => 
                    <ListItem>
                        <ListItemText primary={pokemon.name} />
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>    
                )}
            </List>
            <Button variant="contained" color="primary">Ajouter un pokémon</Button>
        </>
    );
}

export default PokemonList;
