import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    paper:{
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '2em',
        borderRadius: '1em'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#00A8A4',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#0f3349",
        color: 'white'
    },
    field: {
        color: '#0f3349',
    },
    formControl: {
        width: '100%',
        marginTop: '1em',
    },
    colorWhite: {
        color: 'white'
    }
    ,
    colorPrimary: {
        color: '#00A8A4'
    }
    ,
    select: {
        marginTop: '1.5em',
        width: '100%',
    }
    ,
    input: {
        width: '100%',
    }
    ,
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        width: 300,
    }

}));