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
import {createBrowserHistory} from "history";
import history from "../../utils/history";


export function Sidebar(){

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
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
                    <Typography variant="h6" noWrap>
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
                    <ListItem button onClick={()=> {
                        history.push('/live');
                        window.location.reload()
                    }}>
                        <ListItemIcon><EqualizerIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                        <ListItemText primary={"Producción"} style={{color: '#00A8A4'}}/>
                    </ListItem>
                    <ListItem button onClick={()=> {
                        history.push('/operator');
                        window.location.reload()
                    }}>
                        <ListItemIcon><PeopleIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                        <ListItemText primary={"Operarios"} style={{color: '#00A8A4'}}/>
                    </ListItem>
                    <ListItem button onClick={()=> {
                        history.push('/scheduling');
                        window.location.reload()
                    }}>
                        <ListItemIcon><ScheduleIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                        <ListItemText primary={"Scheduling"} style={{color: '#00A8A4'}}/>
                    </ListItem>

                </List>
                <List style={{marginTop: 'auto'}}>
                    <Divider/>
                    <ListItem button>
                        <ListItemIcon><LogoutIcon style={{color: '#00A8A4'}}/></ListItemIcon>
                        <ListItemText primary={"Cerrar sesión"} style={{color: '#00A8A4'}}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}