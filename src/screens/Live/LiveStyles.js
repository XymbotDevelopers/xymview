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
    card: {
        backgroundColor: '#c4c4c4',
        margin: '1em',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',

    },
    cardTitle: {
        color: '#005c59',
        padding: '6px !important',
        textAlign: 'center',
        fontSize: '10px'
    },
    title: {
        color: 'lightgray',
    },
    filterField: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterFieldText:{
        color: 'white'
    },
    filterFieldSelect:{
        marginLeft: '1em',
        padding: ' 4px',
        borderRadius: ' 0.5em',
        backgroundColor: 'white'
    }

}));