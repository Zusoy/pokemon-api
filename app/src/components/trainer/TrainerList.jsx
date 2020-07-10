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

const TrainerList = ({ trainers }) => {
    const classes = useStyles();

    return (
        <>
            <List className={classes.root}>
                {trainers.map(trainer => 
                    <ListItem key={trainer.id} >
                        <ListItemText primary={trainer.name} />
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>    
                )}
            </List>
            <Button variant="contained" color="primary">Ajouter un dresseur</Button>
        </>
    )
}

export default TrainerList;
