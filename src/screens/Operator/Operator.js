import React, {useEffect} from 'react';
import {useStyles} from "./OperatorStyles";

export default function Operator() {
    const classes = useStyles();

    useEffect(()=> {
        console.log("OPERATOR VIEW")
    }, [])

    return (
        <h1>OPERATOR</h1>
    );
}