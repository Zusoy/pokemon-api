import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Button, ListItem, ListItemText, List, Box, IconButton } from "@material-ui/core"
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


const ListBox = () => {
    const classes = useStyles();

    return (
        <Box m={2}>
            <h2>Box</h2>
            <List className={classes.root} >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <IconButton className={classes.icon} aria-label="edit">
                        <CreateIcon/>
                    </IconButton>
                </ListItem >
                <ListItem >
                    <ListItemText primary={"Dresseur 1"} />
                    <IconButton className={classes.icon} aria-label="edit">
                        <CreateIcon />
                    </IconButton>
                </ListItem>
            </List >
            <Button variant="contained" color="primary">Ajouter une box</Button>
        </Box>)
}

export default ListBox;