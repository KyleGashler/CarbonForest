import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import hat from '../images/hatCircle.png';

const useStyles = makeStyles({
    separator2: {
        display: "inline-block",
        width: "75%",
        background: "#E6600E",
        height: "5px",
    },
    shop: {
        textAlign: "left",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",
        color: "black",
        height: "600px",
        fontWeight: "bold",
        fontFamily: "Chivo, sans-serif"
    },
    heading: {
        textAlign: "left",
    },
    hat: {
        backgroundImage: `url(${hat})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "500px",
        height: 500,
    },
    products: {
        alignContent: "left"
    }
});

export default function ShopPanel() {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={12}>
            <div className={classes.shop}>
                <p style={{ marginBottom: "0" }} className={classes.heading}>Shop CarbonForest.</p>
                <hr className={classes.separator2}></hr>
                <Grid
                    container
                    className={classes.products}
                    spacing={3}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item >
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.hat}></div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.hat}></div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.hat}></div>
                    </Grid>
                    <Grid item >
                        <ArrowForwardIosIcon></ArrowForwardIosIcon>
                    </Grid>
                </Grid>
            </div>
        </Grid>

    );
}