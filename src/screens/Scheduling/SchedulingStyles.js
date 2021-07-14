import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(4),
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
        ,


    }))
;