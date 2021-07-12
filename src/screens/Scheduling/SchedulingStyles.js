import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            marginTop: '4em',
            marginLeft: '6em',
        },
        content: {
            height: "100%",
            width: "100%",
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundColor: '#555'

        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        form: {
            alignItems: "center",
            display: "flex",
            flexDirection: 'column',
            background: "red",

        },
        field: {
            borderRadius: '5px',
            border: 0,
            height: '2em',
            width: '20em',
        },
        label: {
            color: 'white',
            textAlign: 'left'
        },
        row: {
            marginTop: '1rem',
            paddingRight: '3em',
            paddingLeft: '3em',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column'
        },
        button: {
            marginTop: '1rem',
            border: 0,
            borderRadius: '5px',
            height: '3em',
            width: '20em',
            color: 'white',
            background: 'darkslategrey'
        }


    }))
;