import {Card, CardHeader} from "@material-ui/core";
import React from "react";
import {useStyles} from "./ProductionChartStyles";
import Chart from "react-apexcharts";

export function ProductionChart(props) {
    const classes = useStyles();


    const series = [
        {
            name: "Panel",
            data: [
                [16.4, 4], [21.7, 4], [25.4, 4], [19, 4], [10.9, 4], [13.6, 4], [10.9, 4], [10.9, 4], [10.9, 4], [16.4, 4], [16.4, 4], [13.6, 4], [13.6, 4], [29.9, 4], [27.1, 4], [16.4, 4], [13.6, 4], [10.9, 4], [16.4, 4], [10.9, 4], [24.5, 4], [10.9, 4], [8.1, 4], [19, 4], [21.7, 4], [27.1, 4], [24.5, 4], [27.1, 4], [29.9, 4], [27.1, 4], [22.1, 4]]
        },
        {
            name: "Trampilla",
            data: [
                [36.4, 10], [1.7, 10], [5.4, 10], [9, 10], [1.9, 10], [3.6, 10], [1.9, 10], [1.9, 10], [1.9, 10], [1.4, 10], [6.4, 10], [3.6, 10], [1.6, 10], [9.9, 10], [7.1, 10], [1.4, 10], [3.6, 10], [1.9, 10], [6.4, 10], [0.9, 10], [4.5, 10], [10.9, 10], [0.1, 10], [9, 10], [12.7, 10], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 10], [7.1, 10], [2.1, 10]]
        }
    ];

    const options = {
        chart: {
            height: 350,
            type: 'bar',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 10
        }
    };


    return (
        <Card className={classes.card}>
            <CardHeader title={props.title} titleTypographyProps={{variant: 'body1'}} className={classes.cardTitle}/>
            <Chart options={options} series={series} type="scatter" height={420}/>
        </Card>
    )

}