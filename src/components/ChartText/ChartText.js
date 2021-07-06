import {Card, CardHeader} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./ChartTextStyles";

export function ChartText(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader title={props.title} titleTypographyProps={{variant: 'body1'}} className={classes.cardTitle}/>
            <Typography align={"center"} variant={"h2"} className={classes.cardText}>{props.text}</Typography>
        </Card>
    )

}