import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import map from '../images/map.png';


const useStyles = makeStyles({
    separator2: {
        color: "white",
        display: "inline-block",
        width: "75%",
        background: "#E6600E",
        height: "5px",
    },
    share: {
        paddingTop: "120px",
        lineHeight: "80%",
        fontSize: "12pt"
    },
    community: {
        textAlign: "left",
        paddingTop: "50px",
        backgroundColor: "gray",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "50pt",
        color: "white"
    },
    map: {
        backgroundImage: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "1150px",
        height: 340,

    },
    cfStats: {
        textAlign: "center",
        fontSize: "24pt",
    },
});

export default function FirstPannel() {
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={6}>
            <div className={classes.community}>
                <h3>Community impact.</h3>
                <hr className={classes.separator2}></hr>
                <div className={classes.map}></div>
                <div className={classes.cfStats}>
                    <h3 className={classes.cfStats}>4588 TREES PLANTED</h3>
                    <h3 className={classes.cfStats}>75 MEMBERS</h3>
                    <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="white" />
                    <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="white" />
                    <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="white" />
                    <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" />
                    <div>woohoo! share with your friends.</div>
                </div>
            </div>
        </Grid>

    );
}