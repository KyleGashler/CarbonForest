import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import MainPannel from './MainPannel';
import MapPannel from './MapPannel';
import TreeInfoPannel from './TreeInfoPannel';


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Fraunces, serif"
    },
}));

const Dashboard = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container  >
                <MainPannel></MainPannel>
                <MapPannel></MapPannel>
                <TreeInfoPannel></TreeInfoPannel>
            </Grid>
        </div>
    );
};


export default Dashboard;