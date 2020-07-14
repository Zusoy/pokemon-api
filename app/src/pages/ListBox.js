import React from "react"
// import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import { BoxList } from '../components/box';

//const useStyles = makeStyles({
//     root: {
//         width: "200px",
//         marginBottom: "20px"
//     }, 
//     icon: {
//         padding: "0",
//     },
// });

const ListBox = () => {
    //const classes = useStyles();

    return (
        <Box m={2}>
            <h2>Box</h2>
            <BoxList boxes={[]} />
        </Box>)
}

export default ListBox;
