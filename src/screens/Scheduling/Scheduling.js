import React, {useState} from 'react';
import {useStyles} from "./SchedulingStyles";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TextField from "@material-ui/core/TextField";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Scheduling() {
    const classes = useStyles();

    const [piece, setPiece] = useState('');
    const [press, setPress] = useState('');
    const [numPieces, setNumPieces] = useState(100);
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();


    let sendData = async (values) => {
        const response = await fetch("http://localhost:8000/api/machine/newMachine", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values) // body data type must match "Content-Type" header
        });
        console.log(response);


        return response.json(); // parses JSON response into native JavaScript objects
    }


    return (
        <Container component="main" maxWidth="md">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ScheduleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.colorPrimary}>
                    Planificar producción
                </Typography>
                <form className={classes.form}>
                    <FormControl variant="outlined" className={classes.select}>
                        <InputLabel id="pieza-label">Pieza</InputLabel>
                        <Select
                            labelId={"pieza-label"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="piece"
                            onChange={(e) => setPiece(e.target.value)}
                            value={piece}
                            label={"Pieza"}
                            name="piece"
                            autoFocus
                        >
                            <MenuItem value={"1"}>PRUEBA</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.select}>
                        <InputLabel id="press-label">Prensa</InputLabel>
                        <Select
                            labelId={"press-label"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="press"
                            onChange={(e) => setPress(e.target.value)}
                            value={press}
                            label={"Prensa"}
                            name="press"

                        >
                            <MenuItem value={"1"}>PRENSA 1</MenuItem>
                            <MenuItem value={"2"}>PRENSA 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.input}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={numPieces}
                            onChange={(e)=> setNumPieces(e.target.value)}
                            name="numPieces"
                            label="Número de piezas"
                            type="number"
                            id="numPieces"
                            InputProps={{
                                step: 10,
                                className: classes.field
                            }}
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.input}>
                        <Typography id="">Fecha inicio</Typography>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={dateFrom}
                            onChange={(e)=> setDateFrom(e.target.value)}
                            name="dateTo"
                            type="datetime-local"
                            id="dateTo"
                            InputProps={{
                                className: classes.field
                            }}
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.input}>
                        <Typography id="">Fecha fin</Typography>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={dateTo}
                            onChange={(e)=> setDateTo(e.target.value)}
                            name="dateTo"
                            type={"datetime-local"}
                            id="dateTo"
                            InputProps={{
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
                        Añadir
                    </Button>

                </form>
            </div>
        </Container>


    );

}