import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

const types = [
    {
        value: 'Fire',
        label: 'Feu',
    },
    {
        value: 'Water',
        label: 'Eau',
    },
    {
        value: 'Plant',
        label: 'Plante',
    },
    {
        value: 'Electricity',
        label: 'Electricité',
    },
    {
        value: 'Ice',
        label: 'Glace',
    }
];


const AddPokemon = () => {
    let boxes = [];
    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const handleChangeBox = (event) => {
        setBox(event.target.value);
    };
    const [type, setType] = React.useState('Fire');
    const [box, setBox] = React.useState("");

    return (
        <div>
            <h2>Ajout d'un pokemon</h2>
            <Box m={2}>
                <TextField id="outlined-basic" label="Nom" variant="outlined" />
            </Box>
            <Box m={2}>
                <TextField
                    select
                    label="Type"
                    variant="outlined"
                    value={type}
                    onChange={handleChangeType}
                    helperText="Veuillez selectionner un type"
                >
                    {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box m={2}>
                <h4>Box</h4>
                <TextField
                    select
                    label="Box"
                    variant="outlined"
                    value={box}
                    onChange={handleChangeBox}
                    helperText="Veuillez selectionner une box"
                >
                    {boxes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <h4>Ajout d'une box</h4>
                <TextField id="outlined-basic" label="Nom de la box" variant="outlined" />
                <Button variant="contained">+</Button>
            </Box>
            <Box m={2}>
                <Button variant="contained">Ajouter le pokemon</Button>
            </Box>

        </div>)
}


export default AddPokemon;