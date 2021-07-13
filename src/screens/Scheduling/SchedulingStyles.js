import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
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


    }))
;