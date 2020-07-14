/* eslint-disable */
import React, { useState } from 'react';
import {
    Button,
    ListItem,
    ListItemText,
    List,
    IconButton,
    makeStyles,
    Modal,
    createStyles,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import { createPokemon, updatePokemon } from '../../services/fetchers';
import { red } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        outline: 'none',
    };
}
const useStyles = makeStyles((theme) =>
    createStyles({
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
            padding: theme.spacing(2, 4, 3),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

const PokemonList = ({ pokemons, boxId, setPokemons }) => {
    const [modalStyle] = useState(getModalStyle);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [pokemon, setPokemon] = useState(null);

    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenUpdate = pokemon => {
        setPokemon(pokemon);
        setName(pokemon.name);
        setUpdateOpen(true);
    }

    const handleCloseUpdate = () => {
        setUpdateOpen(false);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const finishPokemon = (res) => {
        res.box = { id: res.box }
        pokemons.push(res)
        setPokemons(pokemons)
        handleClose()
    }

    const Body = ({ add }) => {
        return <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{add ? "Ajouter une box" : "Modifier une box"}</h2>
            <TextField id="outlined-basic" label="Nom du dresseur" value={name} onChange={handleChangeName} variant="outlined" />
            <br></br>
            <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChangeType}>
                    <FormControlLabel value="Water" control={<Radio />} label="Eau" />
                    <FormControlLabel value="Fire" control={<Radio />} label="Feu" />
                    <FormControlLabel value="Plant" control={<Radio />} label="Plante" />
                    <FormControlLabel value="Electricity" control={<Radio />} label="Electrique" />
                    <FormControlLabel value="Ice" control={<Radio />} label="Glace" />
                </RadioGroup>
            </FormControl>
            <br></br>
            {add
            ? <Button onClick={() => { createPokemon({ name: name, type: type, "box": boxId }).then(res => finishPokemon(res)) }} variant="contained">Oui</Button>
            : <Button onClick={() => { updatePokemon(pokemon.id, { name: name, type: type }) } } variant="contained">Oui</Button> 
            }
        </div>
    };

    const classes = useStyles();

    return (
        <>
            <List className={classes.root}>
                {pokemons.map(pokemon =>
                    <ListItem key={pokemon.id}>
                        <ListItemText primary={pokemon.name + " - " + pokemon.type} />
                        <IconButton onClick={() => handleOpenUpdate(pokemon)}>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>
                )}
            </List>
            {boxId && pokemons.length == 0 &&
                <p>Pas de pokémon dans cette box</p>
            }
            <Button variant="contained" color="primary" onClick={handleOpen}>Ajouter un pokémon</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {Body({ add: true })}
            </Modal>
            <Modal
                open={updateOpen}
                onClose={handleCloseUpdate}
                aria-labelledby="update-modal-title"
                aria-describedby="update-modal-description"
            >
                {Body({ add: false })}
            </Modal>
        </>
    );
}

export default PokemonList;
