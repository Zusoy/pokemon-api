import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createPokemon } from '../../services/fetchers';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const PokemonForm = ({ onSuccess }) => {
    const classes = useStyles();
    const [name, setName] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();

        createPokemon({
            name: name
        })
        .catch(error => {
            console.log(error);
        })
        .then(response => {
            onSuccess();
        });
    }

    return (
        <>
        <form action="/" onSubmit={event => onFormSubmit(event)}>
            <TextField 
                name="name" 
                label="Nom" 
                required={true}
                onInput={e => setName(e.target.value)}
            />
            <Button type="submit">Créer</Button>
        </form>
        </>
    );
}

export default PokemonForm;
