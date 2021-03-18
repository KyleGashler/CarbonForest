import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import map from '../images/TreeMap.png';


const useStyles = makeStyles({
    separator2: {
        color: "white",
        display: "inline-block",
        width: "75%",
        background: "#E6600E",
        height: "5px",
    },
    community: {
        textAlign: "left",
        paddingTop: "20px",
        backgroundColor: "gray",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",
        color: "white",
        height: "1200px",
        fontWeight: "bold",
        fontFamily: "Chivo, sans-serif"
    },
    map: {
        backgroundImage: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "900px",
        height: 500,
    },
    cfStats: {
        textAlign: "center",
        fontSize: "42pt",

    },
    social: {
        fontSize: "15pt",
        paddingLeft: "12%",
        paddingRight: "12%",
        letterSpacing: "1px",
    },
});

export default function FirstPannel() {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={6}>
            <div className={classes.community}>
                <p style={{ marginBottom: "0" }}>Community impact.</p>
                <hr className={classes.separator2}></hr>
                <div className={classes.map}></div>
                <div className={classes.cfStats}>
                    <h3 className={classes.cfStats}>4588 TREES PLANTED</h3>
                    <h3 className={classes.cfStats}>75 MEMBERS</h3>
                    <Grid container className={classes.social}>
                        <Grid item xs={12} sm={6}>
                            <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="white" style={{ height: 40, width: 40 }} />
                            <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="white" style={{ height: 40, width: 40 }} />
                            <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="white" style={{ height: 40, width: 40 }} />
                            <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" style={{ height: 40, width: 40 }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>WOOHOO! SHARE WITH YOUR FRIENDS.</div>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </Grid>

    );
}