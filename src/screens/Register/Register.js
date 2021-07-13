import React, {useRef, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from "../../context/AuthContext";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '2em',
        borderRadius: '1em'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#00A8A4',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#0f3349",
        color: 'white'
    },
    field: {
        backgroundColor: 'white',
        color: '#0f3349'
    },
    colorWhite: {
        color: 'white'
    },
    colorPrimary: {
        color: '#00A8A4'
    }

}));

export default function Register() {
    const classes = useStyles();


    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {signup, currentUser} = useAuth()

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center" className={classes.colorWhite}
            >
                {'Copyright © '}
                <Link target={"_blank"} color="inherit" href="https://xymbot.com/" className={classes.colorWhite}
                >
                    Xymbot
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("TESTING")

        if (password !== confirmPassword) {
            return setError("LAS CONTRASEÑAS NO COINCIDEN")
        }

        try {
            setLoading(true)
            setError('');
            await signup(email, password)
        } catch {
            setLoading(false)
            return setError("ERROR AL CREAR UN NUEVO USUARIO")

        }
        setLoading(false)


    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.colorPrimary}>
                    Registrar usuario
                </Typography>
                {error && <div>{error}</div>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        label="Nombre usuario"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        InputProps={{
                            className: classes.field
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            className: classes.field
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}

                        name="password"
                        label="Confirmar contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            className: classes.field
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" className={classes.colorWhite}
                        />}
                        label="Remember me"
                        className={classes.colorWhite}

                    />
                    <Button
                        fullWidth
                        disabled={loading}
                        type={"submit"}
                        variant="contained"
                        className={classes.submit}
                    >
                        Registrar usuario
                    </Button>

                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    )
        ;
}