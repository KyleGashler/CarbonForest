import React from "react";
import { useStoreState } from "easy-peasy";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import map from '../images/map.png';
import Image from 'material-ui-image'

import dashboardBackground from '../images/dashboardBackground.png'; // Import using relative path

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "Fraunces, serif"
    },
    top: {
        textAlign: 'center',
        backgroundImage: `url(${dashboardBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: 1200,
    },
    paper: {
        textAlign: 'left',
        color: "white",
        background: "rgba(76, 175, 80, 0.0)",
        lineHeight: "1%"
    },
    titles: {
        paddingTop: "205px",
    },
    welcome: {
        fontSize: "60pt",
        color: "black",
        fontWeight: "900"
    },
    treeInfo: {
        paddingLeft: "420px",
        paddingRight: "420px",
        fontSize: "18pt",
        color: "white",

    },
    underlined: {
        fontSize: "60pt",
        fontWeight: "700"

    },
    separator: {
        color: "white",
        display: "inline-block",
        width: "75%",
        background: "white",
        height: "4px",
    },
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
}));

const Dashboard = () => {
    const user = useStoreState((state) => state.customer);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <div className={classes.top}>
                        <div className={classes.titles}>
                            <h1 className={classes.welcome}>
                                welcome, {user.first_name}.
                        </h1>
                            <Grid container spacing={3} className={classes.treeInfo}>
                                <Grid item xs={12} sm={4}>
                                    <div className={classes.paper}>
                                        <p className={classes.underlined}>66</p>
                                        <hr className={classes.separator}></hr>
                                        <p>Trees planted</p>
                                        <p>to date.</p>
                                        <p className={classes.share}>SHARE YOUR PROGRESS</p>
                                        <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="white" />
                                        <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="white" />
                                        <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="white" />
                                        <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" />
                                        <p className={classes.share}>scroll for more <ArrowDropDownIcon></ArrowDropDownIcon> </p>

                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className={classes.paper}>
                                        <p className={classes.underlined}>614</p>
                                        <hr className={classes.separator}></hr>
                                        <p>Trees to go to erase</p>
                                        <p>your carbon footprint.</p>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <div className={classes.paper}>
                                        <p className={classes.underlined}>9.7%</p>
                                        <hr className={classes.separator}></hr>
                                        <p>Of your lifetime carbon</p>
                                        <p>footprint erased.</p>

                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
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
            </Grid>
        </div>
    );
};


export default Dashboard;