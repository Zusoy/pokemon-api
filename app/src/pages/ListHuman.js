import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import { TrainerList } from '../components/trainer';

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

    return (
        <Box m={2}>
            <h2>Tous les dresseurs</h2>
            <TrainerList trainers={[]} />
        </Box>)
}

export default ListHuman;
