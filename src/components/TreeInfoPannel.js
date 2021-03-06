import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';


const useStyles = makeStyles({
    separator2: {
        color: "white",
        display: "inline-block",
        width: "75%",
        background: "#E6600E",
        height: "5px",
    },
    cfStats: {
        textAlign: "center",
        fontSize: "24pt",
    },
    yours: {
        textAlign: "left",
        paddingTop: "50px",
        backgroundColor: "#d3d3d3",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",

    },
    yourTrees: {
        fontSize: "16pt",
        textAlign: "center",
    }

});

export default function FirstPannel() {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={6}>
            <div className={classes.yours}>
                <h3>Your impact.</h3>
                <hr className={classes.separator2}></hr>
                <p className={classes.yourTrees}>Your trees are planted in Colorado! Check out your trees:</p>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={4}>x</Grid>
                    <Grid item xs={12} sm={4}>x</Grid>
                    <Grid item xs={12} sm={4}>x</Grid>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>x</Grid>
                    <Grid item xs={12} sm={6}>x</Grid>

                </Grid>
                <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="white" />
                <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="white" />
                <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="white" />
                <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" />
                <div>woohoo! share with your friends.</div>
            </div>
        </Grid>

    );
}