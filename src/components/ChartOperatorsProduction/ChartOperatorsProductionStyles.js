import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    card:{
        backgroundColor: '#D1F2EB',
        margin: '1em',
        display: 'flex',
        flexDirection: 'column',

    },
    cardTitle:{
        color: '#005c59',
        padding: '6px ',
        textAlign: 'center',
        fontSize: '10px'
    },
    cardText: {
        padding:'0.1em'
    }

}));