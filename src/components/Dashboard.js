import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainPannel from './MainPanel';
import MapPannel from './MapPanel';
import TreeInfoPannel from './TreeInfoPanel';
import ShopPanel from './shopPanel'


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Fraunces, serif"
    },
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <MainPannel></MainPannel>
                <MapPannel></MapPannel>
                <TreeInfoPannel></TreeInfoPannel>
                <ShopPanel></ShopPanel>
            </Grid>
        </div>
    );
};

export default Dashboard;