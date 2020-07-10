import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Button, ListItem, ListItemText, List, Box, IconButton } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import { fetchAllTrainers } from '../services/fetchers';

const useStyles = makeStyles({
    root: {
        width: "200px",
        marginBottom: "20px"
    },
    icon: {
        padding: "0",
    },
});


const ListHuman = () => {
    const classes = useStyles();

    fetchAllTrainers().then(trainers => console.log(trainers));


    return (
        <Box m={2}>
            <h2>Tous les dresseurs</h2>
            <List className={classes.root} >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <IconButton className={classes.icon} aria-label="edit">
                        <CreateIcon />
                    </IconButton>
                </ListItem >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <IconButton className={classes.icon} aria-label="edit">
                        <CreateIcon />
                    </IconButton>
                </ListItem>
            </List >
            <Button variant="contained" color="primary">Ajouter un dresseur</Button>
        </Box>)
}

export default ListHuman;