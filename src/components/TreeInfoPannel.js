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
    yours: {
        textAlign: "left",
        paddingTop: "20px",
        backgroundColor: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",
        fontFamily: "Chivo, sans-serif",
        fontWeight: "bold"
    },
    yourTrees: {
        fontSize: "16pt",
        textAlign: "left",
        paddingBottom: "50px",
        letterSpacing: "1px",
    },
    speciesImage: {
        backgroundImage: `url(${blueSpruce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "440px",
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
    social: {
        fontSize: "15pt",
        paddingLeft: "12%",
        paddingRight: "12%",
        letterSpacing: "1px",
        marginTop: "100px",
        textAlign: "center",
    },
    progressSection: {
        marginTop: "50px",
        paddingRight: "12%",
        paddingLeft: "12%",
    }
});


export default function FirstPannel() {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <div className={classes.yours}>
                <p style={{ marginBottom: "0" }}>Your impact.</p>
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
                <Grid container className={classes.progressSection}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.progressImage}></div>
                        <p className={classes.speciesName}>9.7% OF MY LIFETIME CARBON ERASED.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.progressImage}></div>
                        <p className={classes.speciesName}>66/680 TREES HAVE BEEN PLANTED.</p>
                    </Grid>
                </Grid>
                <Grid container className={classes.social}>
                    <Grid item xs={12} sm={6}>
                        <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="black" style={{ height: 40, width: 40 }} />
                        <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="black" style={{ height: 40, width: 40 }} />
                        <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="black" style={{ height: 40, width: 40 }} />
                        <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="black" style={{ height: 40, width: 40 }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>WOOHOO! SHARE WITH YOUR FRIENDS.</div>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}