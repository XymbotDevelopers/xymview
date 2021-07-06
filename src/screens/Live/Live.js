import React from 'react';
import {useStyles} from "./LiveStyles";
import Typography from "@material-ui/core/Typography";
import {Card, CardHeader, Grid} from "@material-ui/core";
import {ChartText} from "../../components/ChartText/ChartText"
import {ChartCard} from "../../components/ChartCard/ChartCard";

export default function Live() {
    const classes = useStyles();


    return (
        <div>
            <Typography variant={"h4"}>LIVE</Typography>

            <Grid container xs={12}>
                <Grid xs={12} md={6} lg={3} >
                    <ChartText title={"Piezas"} text={"1543"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <ChartText title={"Piezas/hora"} text={"60"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <ChartText title={"Consumo materias primas"} text={"1.2kg"}></ChartText>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <ChartText title={"Rendimiento"} text={"100%"}></ChartText>
                </Grid>
                <Grid xs={12} lg={9} >
                    <ChartCard title={"Producción"}></ChartCard>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <Grid  lg={12} >
                        <ChartText title={"Plan"} text={"1000"}></ChartText>
                    </Grid>
                    <Grid lg={12}>
                        <ChartText title={"Producidas"} text={"545"}></ChartText>
                    </Grid>
                    <Grid  lg={12} >
                        <ChartText title={"Estado del lote"} text={"55%"}></ChartText>
                    </Grid>
                    <Grid lg={12}>
                        <ChartText title={"Rendimiento"} text={"100%"}></ChartText>
                    </Grid>
                </Grid>

            </Grid>
        </div>

    );
}