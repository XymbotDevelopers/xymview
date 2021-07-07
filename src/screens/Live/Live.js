import React, {useEffect, useState} from 'react';
import {useStyles} from "./LiveStyles";
import Typography from "@material-ui/core/Typography";
import {Card, CardHeader, Grid, MenuItem, Select} from "@material-ui/core";
import {ChartText} from "../../components/ChartText/ChartText"
import {ProductionChart} from "../../components/ProductionChart/ProductionChart";
import {fetch} from "../../utils/fetch";

export default function Live() {
    const classes = useStyles();

    const [total, setTotal] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [consumption, setConsumption] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [description, setDescription] = useState("Description");
    const [totalPlan, setTotalPlan] = useState(100);
    const [producedPlan, setProducedPlan] = useState(40);


    // let getData = async () => {
    //     // let res = await fetch("test", " test");
    // }

    // useEffect(async () => {
    //     await getData();
    // }, [])

    const filterCard = () => {
        return (
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select value={10} className={classes.filterFieldSelect} onChange={() => console.log("cambia")}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select value={10} className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select value={10} className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select value={10} className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
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
                    <ChartText title={"Consumo materias primas"} text={`${consumption} kg`}></ChartText>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <ChartText title={"Rendimiento"} text={performance}></ChartText>
                </Grid>
                <Grid container>
                    <Grid item xs={12} lg={9} >
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
                                <ChartText title={"Estado del lote"}
                                           text={`${(producedPlan / totalPlan) * 100}%`}></ChartText>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </div>

    );
}