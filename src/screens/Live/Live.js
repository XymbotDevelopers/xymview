import React, {useEffect, useState} from 'react';
import {useStyles} from "./LiveStyles";
import Typography from "@material-ui/core/Typography";
import {Card, CardHeader, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {ChartText} from "../../components/ChartText/ChartText"
import {GaugeChart} from "../../components/GaugeChart/GaugeChart"
import {ProductionChart} from "../../components/ProductionChart/ProductionChart";
import {fetch} from "../../utils/fetch";
import {ChartOperatorsProduction} from "../../components/ChartOperatorsProduction/ChartOperatorsProduction";
import ProductionPlanTable from '../../components/ProductionPlanTable/ProductionPlanTable'
import Container from "@material-ui/core/Container";

export default function Live() {
    const classes = useStyles();

    const [total, setTotal] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [consumption, setConsumption] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [description, setDescription] = useState("Ram");
    const [totalPlan, setTotalPlan] = useState(100);
    const [producedPlan, setProducedPlan] = useState(40);

    const [filter, setFilter] = useState({
        piece: 1,
        press: '',
        operators: '',
        turn: '',
    });

    // let getData = async () => {
    //     // let res = await fetch("test", " test");
    // }

    // useEffect(async () => {
    //     await getData();
    // }, [])

    const referencias = [
        {
            description: "Rampa",
            code: "1"
        },
        {
            description: "Trampilla2",
            code: "2"
        },
        {
            description: "Trampilla3",
            code: "3"
        }
    ]

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    const presses = [
        1, 2, 3, 4, 5
    ];

    const turns = [
        "day", "night"
    ];

    const handleChange = (event) => {
        console.log(event)
        const name = event.target.name;
        setFilter({
            ...filter,
            [name]: event.target.value,
        });
    };

    const filterCard = () => {
        return (

            <Grid container className={classes.filterCard}>
                <Grid item xs={12} lg={3}>
                    <div className={classes.filterField}>
                        <InputLabel id="select-piece" className={classes.filterFieldText}>Pieza</InputLabel>
                        <Select labelId="select-piece"
                                value={filter.piece} className={classes.filterFieldSelect} onChange={handleChange}
                                inputProps={{name: 'piece'}}>
                            <MenuItem value={0}>TODAS</MenuItem>
                            {referencias.map((referencia) => {
                                return (
                                    <MenuItem value={referencia.code}>{referencia.description}</MenuItem>
                                )

                            })}

                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className={classes.filterField}>
                        <InputLabel id="select-piece" className={classes.filterFieldText}>Operarios</InputLabel>
                        <Select labelId="select-piece"
                                value={filter.operators} className={classes.filterFieldSelect}
                                onChange={handleChange}
                                inputProps={{name: 'operators'}}>
                            <MenuItem value={0}>TODAS</MenuItem>
                            {names.map((name) => {
                                return (
                                    <MenuItem value={name}>{name}</MenuItem>
                                )

                            })}

                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className={classes.filterField}>
                        <InputLabel id="select-piece" className={classes.filterFieldText}>Prensa</InputLabel>
                        <Select labelId="select-piece"
                                value={filter.press} className={classes.filterFieldSelect} onChange={handleChange}
                                inputProps={{name: 'press'}}>
                            <MenuItem value={0}>TODAS</MenuItem>
                            {presses.map((press) => {
                                return (
                                    <MenuItem value={press}>{press}</MenuItem>
                                )

                            })}

                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className={classes.filterField}>
                        <InputLabel id="select-piece" className={classes.filterFieldText}>Turno</InputLabel>
                        <Select labelId="select-piece"
                                value={filter.turn} className={classes.filterFieldSelect} onChange={handleChange}
                                inputProps={{name: 'turn'}}>
                            <MenuItem value={0}>TODAS</MenuItem>
                            {turns.map((turn) => {
                                return (
                                    <MenuItem value={turn}>{turn}</MenuItem>
                                )

                            })}

                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.filterField}>
                        <TextField
                            id="datetime-local"
                            label="Fecha inicio"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.filterFieldSelect}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.filterField}>
                        <TextField
                            id="datetime-local"
                            label="Fecha fin"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.filterFieldSelect}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        );

    }

    return (
        <div>
            <Typography variant={"h4"} className={classes.title}>LIVE</Typography>
            <Grid container>
                {filterCard()}

                <Grid item xs={12} md={6} lg={3}>
                    <ChartText title={"Piezas"} text={total}></ChartText>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <ChartText title={"Piezas/hora"} text={totalHour}></ChartText>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <ChartText title={"Consumo"} text={`${consumption} kg`}></ChartText>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <ChartText title={"Rendimiento"} text={performance}></ChartText>
                </Grid>
                <Grid container>
                    <Grid item xs={12} lg={9}>
                        <ProductionChart title={"Producción"}></ProductionChart>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <ChartText title={"Pieza"} text={description}></ChartText>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <ChartText title={"Plan"} text={totalPlan}></ChartText>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <ChartText title={"Producidas"} text={producedPlan}></ChartText>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <GaugeChart title={"Completado"}
                                            completed={(producedPlan / totalPlan) * 100}></GaugeChart>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{display: "flex", justifyContent: "center"}}>
                    <ProductionPlanTable title={"Table"}></ProductionPlanTable>
                </Grid>
                <Grid item xs={12}>
                    <ChartOperatorsProduction title={"Rendimiento operarios"}></ChartOperatorsProduction>
                </Grid>
                <Grid item xs={12}>
                    <ChartOperatorsProduction title={"Rendimiento piezas"}></ChartOperatorsProduction>
                </Grid>
                <Grid item xs={12}>
                    <ChartOperatorsProduction title={"Rendimiento turnos"}></ChartOperatorsProduction>
                </Grid>


            </Grid>
        </div>

    );
}