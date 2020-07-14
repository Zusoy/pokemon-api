import React from "react"
import { Box } from "@material-ui/core"
import { BoxList } from '../components/box';

const ListBox = () => {
    return (
        <Box m={2}>
            <h2>Box</h2>
            <BoxList boxes={[]} />
        </Box>)
}

export default ListBox;
