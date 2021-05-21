import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import blueSpruce from '../media/blueSpruce.png';
import ponderosa from '../media/ponderosa.jpg';

const useStyles = makeStyles({
    separator2: {
        display: 'inline-block',
        width: '75%',
        background: '#E6600E',
        height: '4px',
    },
    yours: {
        backgroundColor: 'white',
        paddingTop: '1px',
        textAlign: 'left',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontSize: '40pt',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
            textAlign: 'center',
            fontSize: '30pt',
        },
    },
    yourTrees: {
        fontSize: '16pt',
        textAlign: 'center',
        paddingBottom: '20px',
        letterSpacing: '1px',
        '@media (max-width: 900px)': {
            fontSize: '12pt',
        },
    },
    colo: {
        backgroundImage: `url(${blueSpruce})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '1240px',
        height: 550,
        '@media (max-width: 900px)': {
            backgroundSize: '840px',
            height: 340,
        },
    },
    cali: {
        backgroundImage: `url(${ponderosa})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '1240px',
        height: 720,
        '@media (max-width: 900px)': {
            backgroundSize: '840px',
            height: 340,
        },
    },
    speciesName: {
        fontSize: '16pt',
        textAlign: 'center',
    },
    social: {
        fontSize: '15pt',
        paddingLeft: '12%',
        paddingRight: '12%',
        letterSpacing: '1px',
        marginTop: '50px',
        textAlign: 'center',
        paddingBottom: '50px',
    },
    whoohoo: {
        paddingTop: '10px',
    },
});

export default function TreeInfoPanel(props) {
    const classes = useStyles();
    let treeLocation = props.customer.treeLocation
        ? props.customer.treeLocation.toUpperCase()
        : 'CALIFORNIA';

    return (
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className={classes.yours}>
                <p style={{ marginBottom: '0' }}>Your impact.</p>
                <hr className={classes.separator2}></hr>
                <p className={classes.yourTrees}>
                    YOUR TREES ARE PLANTED IN {treeLocation}! CHECK OUT YOUR TREES:
                </p>
                <GetTreeInfo treeLocation={treeLocation} />
            </div>
        </Grid>
    );
}

function GetTreeInfo(props) {
    const treeLocation = props.treeLocation;
    if (treeLocation.trim() === 'CALIFORNIA') {
        return <RenderCaliTree />;
    } else {
        return <RenderColoTree />;
    }
}

function RenderCaliTree(props) {
    const classes = useStyles();

    return (
        <>
            <p className={classes.speciesName}>PONDEROSA PINE</p>
            <div className={classes.cali}></div>
        </>
    );
}

function RenderColoTree(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.colo}></div>
            <p className={classes.speciesName}>BLUE SPRUCE</p>
        </>
    );
}
