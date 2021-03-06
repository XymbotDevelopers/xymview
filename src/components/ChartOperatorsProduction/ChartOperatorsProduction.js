import {Card, CardHeader} from "@material-ui/core";
import React from "react";
import {useStyles} from "./ChartOperatorsProductionStyles";
import Chart from "react-apexcharts";


export function ChartOperatorsProduction(props) {
    const classes = useStyles();


    const series = [{
        name: 'Operario 1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Operario 2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];

    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }





    return (
        <Card className={classes.card}>
            <CardHeader title={props.title} titleTypographyProps={{variant: 'body1'}} className={classes.cardTitle}/>
            <Chart options={options} series={series} type="area" height={300}/>
        </Card>
    )

}