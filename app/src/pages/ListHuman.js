import React from "react"
import { Box } from "@material-ui/core"
import { TrainerList } from '../components/trainer';

const ListHuman = () => {
    return (
        <Box m={2}>
            <h2>Tous les dresseurs</h2>
            <TrainerList trainers={[]} />
        </Box>)
}

export default ListHuman;
