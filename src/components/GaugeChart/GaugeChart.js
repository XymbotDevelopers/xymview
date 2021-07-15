import {Card, CardHeader} from "@material-ui/core";
import React from "react";
import {useStyles} from "./GaugeChartStyles";
import Chart from "react-apexcharts";


export function GaugeChart(props) {
    const classes = useStyles();


    const series = [
        [props.completed]
    ];

    const options = {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    dataLabels: {
                        value: {
                            offsetY: -20,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },

            labels: [''],
        }


return (
    <Card className={classes.card}>
        <CardHeader title={props.title} titleTypographyProps={{variant: 'body1'}} className={classes.cardTitle}/>
        <Chart options={options} series={series} type="radialBar" height={200}/>
    </Card>
)

}