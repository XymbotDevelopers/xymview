import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import React, {useEffect, useState} from "react";
import {useStyles} from './EditModalStyles'
import Avatar from "@material-ui/core/Avatar";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Typography from "@material-ui/core/Typography";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const EditModal = (props) => {
    const classes = useStyles();
    const [piece, setPiece] = useState('');
    const [press, setPress] = useState('');
    const [numPieces, setNumPieces] = useState(100);
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [turns, setTurns] = useState(0);

    useEffect(()=>{
        console.log(props.row);
    })

    let editForm = () => {
        return (
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ScheduleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.colorPrimary}>
                    Editar planificación
                </Typography>
                <form className={classes.form}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="pieza-label">Pieza</InputLabel>
                        <Select
                            labelId={"pieza-label"}
                            variant="outlined"
                            margin="normal"
                            disabled
                            required
                            fullWidth
                            id="piece"
                            onChange={(e) => setPiece(e.target.value)}
                            value={1}
                            label={"Pieza"}
                            name="piece"
                            autoFocus
                            className={classes.field}
                        >
                            <MenuItem value={1}>{props.row.descripcion}</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="press-label">Prensa</InputLabel>
                        <Select
                            labelId={"press-label"}
                            variant="outlined"
                            margin="normal"
                            disabled
                            required
                            fullWidth
                            id="press"
                            onChange={(e) => setPress(e.target.value)}
                            value={props.row.prensa}
                            label={"Prensa"}
                            name="press"
                            className={classes.field}
                        >
                            <MenuItem value={"1"}>PRENSA 1</MenuItem>
                            <MenuItem value={"2"}>PRENSA 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={props.row.piezas}
                            onChange={(e) => setNumPieces(e.target.value)}
                            name="numPieces"
                            label="Número de piezas"
                            type="number"
                            id="numPieces"
                            inputProps={{
                                step: 100,
                            }}
                            className={classes.field}

                        />
                    </FormControl>
                    <div>

                    </div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Typography id="" variant={"body2"}>Fecha inicio</Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            value={props.row.fechaInicio}
                            onChange={(e) => setDateFrom(e.target.value)}
                            name="dateTo"
                            type="datetime-local"
                            id="dateTo"
                        />


                    </FormControl>
                    <FormControl variant="outlined" className={classes.input}>
                        <Typography id="">Fecha fin</Typography>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            name="dateTo"
                            type={"datetime-local"}
                            id="dateTo"
                            InputProps={{
                                className: classes.field
                            }}
                        />
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={turns}
                            onChange={(e) => setTurns(e.target.value)}
                            name="numTurns"
                            label="Número de turnos"
                            type="number"
                            id="numTurns"
                            InputProps={{
                                step: 10,
                                className: classes.field
                            }}
                        />
                    </FormControl>


                    <Button
                        fullWidth
                        // disabled={loading}
                        type={"submit"}
                        variant="contained"
                        className={classes.submit}
                    >
                        Editar
                    </Button>

                </form>
            </div>

        )
    }


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paperModal}>
                        {editForm()}

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}