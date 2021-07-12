import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import {useStyles} from "./HomeStyles.js";
import {useAuth0} from "@auth0/auth0-react";


export default function Home() {
    const classes = useStyles();

    return (
        <div>
            HOME
        </div>
    );
}