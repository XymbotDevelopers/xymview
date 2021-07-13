import React, {useEffect} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Home from "./screens/Home/Home";
import Live from "./screens/Live/Live";
import {useStyles} from './AppStyles'
import {Sidebar} from "./components/Sidebar/Sidebar";
import Operator from "./screens/Operator/Operator";
import Scheduling from "./screens/Scheduling/Scheduling";
import {createBrowserHistory} from "history";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import {useAuth} from "./context/AuthContext";
import Profile from "./screens/Profile/Profile";


export default function App() {
    const classes = useStyles();
    const history = createBrowserHistory();
    const {currentUser} = useAuth();

    const routes = () => {
        switch (currentUser?.email) {
            case undefined:
                return (
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                )
            case('admin@pinazo.com'):
                return (
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/live" component={Live}/>
                        <Route exact path="/operator" component={Operator}/>
                        <Route exact path="/scheduling" component={Scheduling}/>
                        <Route exact path="/profile" component={Profile}/>

                    </Switch>
                );
            default:

                return (
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/live" component={Live}/>
                        <Route exact path="/operator" component={Operator}/>
                        <Route exact path="/scheduling" component={Scheduling}/>
                        <Route exact path="/profile" component={Profile}/>
                    </Switch>
                )
        }
    }


    let router = () => {

        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Router history={history} forceRefresh={true}>
                    {routes()}
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