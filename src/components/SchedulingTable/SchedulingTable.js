import {
    Card,
    CardHeader,
    Checkbox, FormControlLabel, lighten, makeStyles, Paper, Switch, Table, TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow,
    TableSortLabel,
    Tooltip
} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function createData(descripcion, prensa, piezas, fechaInicio, fechaFin) {
    return {descripcion, prensa, piezas, fechaInicio, fechaFin};
}

const rows = [
    createData('Armario', 2, 370, '01/02/2021', '01/02/2021'),
    createData('Mesa', 3, 250, '01/02/2021', '01/02/2021'),
    createData('Rampa', 1, 160, '01/02/2021', '01/02/2021'),
    createData('Trampilla', 4, 600, '01/02/2021', '01/02/2021'),
    createData('Soporte', 2, 1600, '01/02/2021', '01/02/2021'),
    createData('Trampilla2', 1, 600, '01/02/2021', '01/02/2021'),


];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {id: 'descripcion', numeric: false, disablePadding: true, label: 'Descripción'},
    {id: 'prensa', numeric: true, disablePadding: false, label: 'Prensa'},
    {id: 'piezas', numeric: true, disablePadding: false, label: 'Piezas'},
    {id: 'fechaInicio', numeric: true, disablePadding: false, label: 'Fecha inicio'},
    {id: 'fechaFin', numeric: true, disablePadding: false, label: 'Fecha fin'},
    {id: 'actions', numeric: true, disablePadding: false, label: 'Acciones'},
];

function EnhancedTableHead(props) {
    const {classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 0,
        width: 1,
    },
    card:{
        backgroundColor: '#D1F2EB',
        margin: '1em',
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
        [theme.breakpoints.down('md')]: {
            width: '85vw',

        },
        [theme.breakpoints.down('sm')]: {
            width: '85vw',

        },
        width: '90vw',

    },
    // table:{
    //         minWidth: 100,
    // }
}));

export default function SchedulingTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('prensa');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    // const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
            <Card className={classes.card}>
                <Typography>{props.title}</Typography>
                <TableContainer >
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    // const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.descripcion)}
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.descripcion}
                                        >
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.descripcion}
                                            </TableCell>
                                            <TableCell align="right">{row.prensa}</TableCell>
                                            <TableCell align="right">{row.piezas}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFin}</TableCell>
                                            <TableCell align="right">
                                                <EditIcon onClick={() => {console.log(row)}}/>
                                                <DeleteOutlineIcon onClick={() => {console.log(row)}}/>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Card>

    );
}