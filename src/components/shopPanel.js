import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withStyles } from '@material-ui/core/styles';

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
        color: "black",
        height: "650px",
        fontWeight: "bold",
        fontFamily: "Chivo, sans-serif",
        marginBottom: "50px"
    },
    hat: {
        backgroundImage: `url(${hat})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "500px",
        height: 400,
        paddingTop: "55px",

    },
    invite: {
        paddingTop: "25px",
        paddingBottom: "50px",
        color: "white",
        backgroundColor: "#E6600E",
    },
    saving: {
        marginRight: "400px",
        marginLeft: "400px",
    },
    productDetail: {
        textAlign: "center"
    },
    title: {
        fontSize: "50pt"
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: "#E6600E",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "gray",
        },

    },
}))(Button);

export default function ShopPanel() {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={12}>
            <div className={classes.shop}>
                <p style={{ marginBottom: "0" }} className={classes.title}>Shop CarbonForest.</p>
                <hr className={classes.separator2}></hr>
                <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item >
                        <ArrowBackIosIcon
                            style={{ color: "#E6600E" }}
                            fontSize="large"
                        >

                        </ArrowBackIosIcon>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="https://carbonforest.org/products/carbon-forest-hat?_pos=1&_sid=100118769&_ss=r">
                            <div className={classes.hat}></div>
                        </a>

                        <div className={classes.productDetail}>
                            <p>Carbon Forest Hat</p>
                            <p>$14</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="https://carbonforest.org/products/carbon-forest-hat?_pos=1&_sid=100118769&_ss=r">
                            <div className={classes.hat}></div>
                        </a>
                        <div className={classes.productDetail}>
                            <p>Carbon Forest Hat</p>
                            <p>$14</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="https://carbonforest.org/products/carbon-forest-hat?_pos=1&_sid=100118769&_ss=r">
                            <div className={classes.hat}></div>
                        </a>
                        <div className={classes.productDetail}>
                            <p>Carbon Forest Hat</p>
                            <p>$14</p>
                        </div>
                    </Grid>
                    <Grid item >
                        <ArrowForwardIosIcon
                            style={{ color: "#E6600E" }}
                            fontSize="large"
                        >
                        </ArrowForwardIosIcon>
                    </Grid>
                </Grid>

            </div>
            <div className={classes.invite}>
                <h1 className={classes.saving}>
                    SAVING THE WORLD IS BETTER WITH FRIENDS!
                    INVITE YOUR FRIENDS TO JOIN CARBONFOREST.
                </h1>
                <ColorButton>
                    REFER A FRIEND
                </ColorButton>
            </div>
        </Grid>

    );
}