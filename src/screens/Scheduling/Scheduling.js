import React, {useState} from 'react';
import {useStyles} from "./SchedulingStyles";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Typography from "@material-ui/core/Typography";

export default function Scheduling() {
    const classes = useStyles();

    const [client, setClient] = useState(null);
    const [connectStatus, setConnectStatus] = useState("");
    const mqttConnect = (host, mqttOption) => {
    };


    let sendData = async (values) => {
        const response = await fetch("http://localhost:8000/api/machine/newMachine", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values) // body data type must match "Content-Type" header
        });
        console.log(response);


        return response.json(); // parses JSON response into native JavaScript objects
    }


    return (
        <Formik
            initialValues={{id: '', prensa: '', piezas: '', date_start: '', date_end: ''}}
            validate={values => {
                const errors = {};
                if (!values.id) {
                    errors.id = 'Required';
                }
                return errors;
            }}
            onSubmit={async (values, {setSubmitting}) => {
                console.log(JSON.stringify(values))
                await sendData(values);
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form className={ classes.form}>
                    <div className={classes.row}>
                        <Typography title={"id"} className="label">ID</Typography>
                        <Field type="id" name="id" className="field"/>
                        <ErrorMessage name="id" component="div"/>
                    </div>
                    <div className={classes.row}>
                        <Typography title={"id"} className="label">Prensa</Typography>
                        <Field type="number" name="prensa" className="field"/>
                        <ErrorMessage name="prensa" component="div"/>
                    </div>
                    <div className={classes.row}>
                        <Typography title={"id"} className="label">Piezas</Typography>
                        <Field type="number" name="piezas" className="field"/>
                        <ErrorMessage name="piezas" component="div"/>
                    </div>
                    <div className={classes.row}>
                        <Typography title={"id"} className="label">Fecha inicio</Typography>
                        <Field type="date" name="date_start" className="field"/>
                        <ErrorMessage name="date_start" component="div"/>
                    </div>
                    <div className={classes.row}>
                        <Typography title={"id"} className="label">Fecha fin</Typography>
                        <Field type="date" name="date_end" className="field"/>
                        <ErrorMessage name="date_end" component="div"/>
                    </div>
                    <button type="submit" className={classes.button} disabled={isSubmitting}>
                        Enviar
                    </button>
                </Form>
            )}
        </Formik>


    );

}