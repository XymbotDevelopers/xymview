import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        flexDirection: 'column',
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
    cardTitle: {
        color: '#005c59',
        padding: '6px !important',
        textAlign: 'center',
        fontSize: '10px'
    },
    title: {
        color: 'lightgray',
    },
    filterCard: {
        backgroundColor: '#D1F2EB',
        margin: '1em',
        padding: '0.75em',
        borderRadius: "5px"
    },
    filterField: {
        width:'100%',
        marginTop: '0.5em',
        padding: '1em'
    },
    filterFieldSelect:{
        width: '100%'
    }

}));