import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import blueSpruce from '../images/blueSpruce.png';


const useStyles = makeStyles({
    separator2: {
        display: "inline-block",
        width: "75%",
        background: "#E6600E",
        height: "4px",
    },
    yours: {
        backgroundColor: "white",
        paddingTop: "1px",
        textAlign: "left",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "40pt",
        fontWeight: "bold",
        "@media (max-width: 900px)": {
            textAlign: "center",
            fontSize: "30pt",
        },
    },
    yourTrees: {
        fontSize: "16pt",
        textAlign: "center",
        paddingBottom: "20px",
        letterSpacing: "1px",
        "@media (max-width: 900px)": {
            fontSize: "12pt",
        },
    },
    speciesImage: {
        backgroundImage: `url(${blueSpruce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "1240px",
        height: 550,
        "@media (max-width: 900px)": {
            backgroundSize: "840px",
            height: 340,
        },
    },
    speciesName: {
        fontSize: "16pt",
        textAlign: "center",
    },
    social: {
        fontSize: "15pt",
        paddingLeft: "12%",
        paddingRight: "12%",
        letterSpacing: "1px",
        marginTop: "50px",
        textAlign: "center",
        paddingBottom: "50px"
    },
    whoohoo: {
        paddingTop: "10px"
    }
});

export default function TreeInfoPanel() {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className={classes.yours}>
                <p style={{ marginBottom: "0" }}>Your impact.</p>
                <hr className={classes.separator2}></hr>
                <p className={classes.yourTrees}>YOUR TREES ARE PLANTED IN COLORADO! CHECKOUT YOUR TREES:</p>
                <div className={classes.speciesImage}></div>
                <p className={classes.speciesName}>BLUE SPRUCE</p>
                <Grid container className={classes.social}>
                    <Grid item xs={12} sm={6}>
                        <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="black" style={{ height: 40, width: 40, margin: 5 }} />
                        <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="black" style={{ height: 40, width: 40, margin: 5 }} />
                        <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="black" style={{ height: 40, width: 40, margin: 5 }} />
                        <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="black" style={{ height: 40, width: 40, margin: 5 }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.whoohoo} >WOOHOO! SHARE WITH YOUR FRIENDS.</div>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}
