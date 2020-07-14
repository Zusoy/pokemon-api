import React, { useState } from "react"
// import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import { TrainerList } from '../components/trainer';
import { fetchAllTrainers } from '../services/fetchers'

const ListHuman = () => {
    const [trainers, setTrainers] = useState([]);
    fetchAllTrainers().then(res => setTrainers(res));
    console.log(trainers)

    return (
        <Box m={2}>
            <h2>Tous les dresseurs</h2>
            <TrainerList trainers={trainers} />
        </Box>)
}

export default ListHuman;
