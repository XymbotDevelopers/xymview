import React from 'react';
import {createStyles, makeStyles, useTheme, Theme} from '@material-ui/core/styles';
import history from "./utils/history";
import {Route, Router, Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import Live from "./screens/Live/Live";

import {useStyles} from './AppStyles'
import {Sidebar} from "./components/Sidebar/Sidebar";

const drawerWidth = 240;


export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    let router = () => {
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/live" component={Live}/>
                    </Switch>
                </Router>
            </main>
        );

    }
    return (
        <div className={classes.root}>
            <Sidebar/>
            {router()}
        </div>
    );


}