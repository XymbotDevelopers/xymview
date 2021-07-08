import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor: '#c4c4c4',
        margin: '1em',
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',

    },
    cardTitle:{
        color: '#005c59',
        padding: '6px !important',
        textAlign: 'center',
        fontSize: '10px'
    },
    cardText: {
        padding:'0.1em'
    }

}));