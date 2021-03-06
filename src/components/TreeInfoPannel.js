import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import blueSpruce from '../images/blueSpruce.png';
import Dial2 from '../images/Dial2.png';


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
        paddingTop: "20px",
        backgroundColor: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",

    },
    yourTrees: {
        fontSize: "16pt",
        textAlign: "left",
        paddingBottom: "50px"
    },
    speciesImage: {
        backgroundImage: `url(${blueSpruce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "400px",
        height: 180,

    },
    speciesName: {
        fontSize: "16pt",
        textAlign: "center",
    },
    progressImage: {
        backgroundImage: `url(${Dial2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "180px",
        height: 180,
    },
});

export default function FirstPannel() {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <div className={classes.yours}>
                <p>Your impact.</p>
                <hr className={classes.separator2}></hr>
                <p className={classes.yourTrees}>Your trees are planted in Colorado! Check out your trees:</p>
                <Grid container >
                    <Grid item xs={12} sm={4}>
                        <div className={classes.speciesImage}></div>
                        <p className={classes.speciesName}>Blue Spruce</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.speciesImage}></div>
                        <p className={classes.speciesName}>Blue Spruce</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.speciesImage}></div>
                        <p className={classes.speciesName}>Blue Spruce</p>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <div className={classes.progressImage}></div>
                        <p className={classes.speciesName}>9.7% OF MY LIFETIME CARBON ERASED.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.progressImage}></div>
                        <p className={classes.speciesName}>66/680 TREES HAVE BEEN PLANTED.</p>
                    </Grid>
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