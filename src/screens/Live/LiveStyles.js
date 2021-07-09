import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    filterCard: {
        backgroundColor: "#D1F2EB",
        padding: "1em",
        margin: "1em",
        borderRadius: "3px"
    }

}));