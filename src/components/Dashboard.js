import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStoreState } from 'easy-peasy';

import MainPannel from './MainPanel';
import MapPannel from './MapPanel';
import TreeInfoPannel from './TreeInfoPanel';
import ShopPanel from './shopPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Fraunces, serif',
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const customer = useStoreState((state) => state.customer);

    return (
        <div className={classes.root}>
            <Grid container>
                <MainPannel customer={customer}></MainPannel>
                <MapPannel customer={customer}></MapPannel>
                <TreeInfoPannel customer={customer}></TreeInfoPannel>
                <ShopPanel></ShopPanel>
            </Grid>
        </div>
    );
};

export default Dashboard;
