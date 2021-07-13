import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useAuth} from "../../context/AuthContext";
import {useStyles} from "./ProfileStyles";
import PersonIcon from "@material-ui/icons/Person";





export default function Profile() {
    const classes = useStyles();



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {login, currentUser} = useAuth()


    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Perfil de usuario
                </Typography>
                <Typography component="h1" variant="h5" className={classes.user}>
                    Usuario: {currentUser.email}
                </Typography>



            </div>
        </Container>
    );
}