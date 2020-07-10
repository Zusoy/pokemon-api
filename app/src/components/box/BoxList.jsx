import React from 'react';
import { 
    Button, 
    ListItem, 
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

const BoxList = ({ boxes }) => {
    const classes = useStyles();

    return (
        <>
            <List className={classes.root}>
                {boxes.map(box => 
                    <ListItem>
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>    
                )}
            </List>
            <Button variant="contained" color="primary">Ajouter une boîte</Button>
        </>
    );
}

export default BoxList;

