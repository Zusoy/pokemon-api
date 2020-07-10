import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Button, ListItem, ListItemText, List, Box } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
    root: {
        width: "200px",
        marginBottom: "20px"
    },
});


const ListHuman = () => {
    const classes = useStyles();

    return (
        <Box m={2}>
            <h2>Tous les dresseurs</h2>
            <List className={classes.root} >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <CreateIcon />
                </ListItem >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <CreateIcon />
                </ListItem>
            </List >
            <Button variant="contained" color="primary">Ajouter un dresseur</Button>
        </Box>)
}

export default ListHuman;