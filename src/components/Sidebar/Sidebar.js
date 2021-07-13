import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Divider from "@material-ui/core/Divider";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import {useStyles} from "../../AppStyles";
import {useTheme} from "@material-ui/core/styles";
import history from "../../utils/history";
import {useAuth} from "../../context/AuthContext";
import PersonIcon from '@material-ui/icons/Person';


export function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {currentUser, logout} = useAuth();


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        Xymview
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon style={{color: '#00A8A4'}}/> :
                            <ChevronLeftIcon style={{color: '#00A8A4'}}/>}
                    </IconButton>
                </div>
                <List>
                    {currentUser ? <div>
                            <ListItem button onClick={() => {
                                history.push('/live');
                                window.location.reload()
                            }}>
                                <ListItemIcon><EqualizerIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Producción"} style={{color: '#00A8A4'}}/>
                            </ListItem>
                            <ListItem button onClick={() => {
                                history.push('/scheduling');
                                window.location.reload()
                            }}>
                                <ListItemIcon><ScheduleIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Scheduling"} style={{color: '#00A8A4'}}/>
                            </ListItem>
                            <ListItem button onClick={() => {
                                history.push('/operator ');
                                window.location.reload()
                            }}>
                                <ListItemIcon><PeopleIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Operarios"} style={{color: '#00A8A4'}}/>
                            </ListItem></div> :
                        <div>
                            <ListItem button onClick={() => {
                                history.push('/login');
                                window.location.reload()
                            }}>
                                <ListItemIcon><PersonIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Login"} style={{color: '#00A8A4'}}/>
                            </ListItem>
                        </div>
                    }
                    {(currentUser?.email == 'admin@pinazo.com') && <ListItem button onClick={() => {
                        history.push('/register');
                        window.location.reload()
                    }}>
                        <ListItemIcon><PersonIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                        <ListItemText primary={"Registrar usuario"} style={{color: '#00A8A4'}}/>
                    </ListItem>
                    }


                </List>
                <List style={{marginTop: 'auto'}}>
                    <Divider/>
                    {currentUser ?
                        <div>


                            <ListItem button onClick={logout}>
                                <ListItemIcon><PersonIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Perfil de usuario"} style={{color: '#00A8A4'}}/>
                            </ListItem>
                            <ListItem button onClick={logout}>
                                <ListItemIcon><LogoutIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                                <ListItemText primary={"Cerrar sesión"} style={{color: '#00A8A4'}}/>
                            </ListItem>
                        </div> :

                        <div></div>}

                </List>
            </Drawer>
        </div>
    );
}