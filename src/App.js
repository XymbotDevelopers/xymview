import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Home from "./screens/Home/Home";
import Live from "./screens/Live/Live";
import {useStyles} from './AppStyles'
import {Sidebar} from "./components/Sidebar/Sidebar";
import Operator from "./screens/Operator/Operator";
import Scheduling from "./screens/Scheduling/Scheduling";
import {createBrowserHistory} from "history";

export default function App() {
    const classes = useStyles();
    const history = createBrowserHistory();

    let router = () => {
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Router history={history} forceRefresh={true}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/live" component={Live}/>
                        <Route exact path="/operator" component={Operator}/>
                        <Route exact path="/scheduling" component={Scheduling}/>
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