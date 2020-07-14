/* eslint-disable */
import React, { useState } from 'react';
import {
    Button,
    ListItem,
    List,
    IconButton,
    makeStyles,
    TextField,
    createStyles,
    Modal
} from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import { createBox } from '../../services/fetchers';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        outline: 'none',
    };
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "200px",
            marginBottom: "20px"
        },
        icon: {
            padding: "0",
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


const BoxList = ({ boxes, trainerId, setBoxId, setBoxes, allBoxes }) => {
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Body = ({ add }) => {
        return <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{add ? "Ajouter une box" : "Modifier une box"}</h2>
            <p>Êtes-vous sur de vouloir ajouter une box ?</p>
            <br></br>
            <Button onClick={() => { handleClose() }} variant="contained">Annuler</Button>
            <Button onClick={() => { createBox({ owner: trainerId }).then(res => { res.owner = { id: res.owner, name: "Sasha2" }, allBoxes.push(res), boxes.push(res), setBoxes(allBoxes), handleClose() }) }} variant="contained">Oui</Button>
        </div>
    };

    const classes = useStyles();
    return (
        <>

            <List className={classes.root}>
                {boxes.map(box =>
                    <ListItem key={box.id} >
                        <span onClick={() => setBoxId(box.id)}>Boîte {box.id}</span>
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                    </ListItem>
                )}
            </List>
            {trainerId && boxes.length == 0 &&
                <p>Ce dresseur ne possède pas de boxes.</p>
            }
            <Button variant="contained" color="primary" onClick={handleOpen}>Ajouter une boîte</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {Body({ add: true, setBoxes: setBoxes })}
            </Modal>

        </>
    );
}

export default BoxList;

