/* eslint-disable */
import React, { useState } from 'react';
import {
    Button,
    ListItem,
    ListItemText,
    List,
    IconButton,
    Modal,
    TextField
} from "@material-ui/core"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import CreateIcon from '@material-ui/icons/Create';
import { createTrainer, updateTrainer } from '../../services/fetchers';

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
    }),
);
const TrainerList = ({ trainers }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [trainer, setTrainer] = useState(null);
    const [modalStyle] = useState(getModalStyle);
    const [value, setValue] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdateOpen = trainer => {
        setTrainer(trainer);
        setValue(trainer.name);
        setUpdateOpen(true);
    }

    const handleUpdateClose = () => {
        setUpdateOpen(false);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const Body = ({ add }) => {
        return <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{add ? "Ajouter un dresseur" : "Modifier un dresseur"}</h2>
            <TextField id="outlined-basic" label="Nom du dresseur" value={value} onChange={handleChange} variant="outlined" />
            <br></br>
            {add
                ? <Button onClick={() => { createTrainer({ name: value, boxes: [] }).then(res => {trainers.push(res), handleClose()})}} variant="contained">Sauvegarder</Button>
                : <Button onClick={() => { updateTrainer(trainer.id, {name: value}), handleUpdateClose() }} variant="contained">Sauvegarder</Button>
            }
        </div>
    };

    return (
        <>
            <List className={classes.root}>
                {trainers.map(trainer =>
                    <ListItem key={trainer.id}>
                        <ListItemText primary={trainer.name} />
                        <IconButton data-id={trainer.id} onClick={() => handleUpdateOpen(trainer)}>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>
                )}
            </List>
            <Button variant="contained" color="primary" onClick={handleOpen}>Ajouter un dresseur</Button>
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
                onClose={handleUpdateClose}
                aria-labelledby="update-modal-title"
                aria-describedby="update-modal-description"
            >
                {Body({ add: false })}
            </Modal>
        </>
    )
}

export default TrainerList;
