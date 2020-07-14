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
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import PokemonForm from './PokemonForm';

const useStyles = makeStyles(theme => ({
    root: {
        width: "200px",
        marginBottom: "20px"
    },
    icon: {
        padding: "0",
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const PokemonList = ({ pokemons }) => {
    const classes = useStyles();
    const modalStyle = getModalStyle();

    const [creationModalOpen, setCreateModalOpen] = useState(false);

    const openModal = () => {
        setCreateModalOpen(true);
    }

    const closeModal = () => {
        setCreateModalOpen(false);
    }

    const onPokemonCreated = () => {
        setCreateModalOpen(false);
    }

    return (
        <>
            <Modal
                open={creationModalOpen}
                onClose={closeModal}
                aria-labelledby="pokemon-modal-title"
                aria-describedby="pokemon-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h1>Create new Pokemon !</h1>
                    <PokemonForm onSuccess={onPokemonCreated} />
                </div>
            </Modal>
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
            <Button
                onClick={() => openModal()} 
                variant="contained" 
                color="primary"
            >
                Ajouter un pokémon
            </Button>
        </>
    );
}

export default PokemonList;
