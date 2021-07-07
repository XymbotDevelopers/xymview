import React from 'react';
import {useStyles} from "./LiveStyles";
import Typography from "@material-ui/core/Typography";
import {Card, CardHeader, Grid, MenuItem, Select} from "@material-ui/core";
import {ChartText} from "../../components/ChartText/ChartText"
import {ProductionChart} from "../../components/ProductionChart/ProductionChart";

export default function Live() {
    const classes = useStyles();


    const filterCard = () => {
        return (
            <Grid container xs={12}>
                <Grid item xs={12} md={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select className={classes.filterFieldSelect}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className={classes.filterField}>
                        <Typography className={classes.filterFieldText}>Pieza</Typography>
                        <Select className={classes.filterFieldSelect}>
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

            <Grid container xs={12}>
                {filterCard()}
                <Grid xs={12} md={6} lg={3}>
                    <ChartText title={"Piezas"} text={"1543"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ChartText title={"Piezas/hora"} text={"60"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ChartText title={"Consumo materias primas"} text={"1.2kg"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <ChartText title={"Rendimiento"} text={"100%"}></ChartText>
                </Grid>
                <Grid xs={12} lg={9}>
                    <ProductionChart title={"Producción"}></ProductionChart>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Grid lg={12}>
                        <ChartText title={"Pieza"} text={"Trampilla"}></ChartText>
                    </Grid>
                    <Grid lg={12}>
                        <ChartText title={"Plan"} text={"1000"}></ChartText>
                    </Grid>
                    <Grid lg={12}>
                        <ChartText title={"Producidas"} text={"545"}></ChartText>
                    </Grid>
                    <Grid lg={12}>
                        <ChartText title={"Estado del lote"} text={"55%"}></ChartText>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}