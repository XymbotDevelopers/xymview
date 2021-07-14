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

}));