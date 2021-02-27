import React from "react";
import { useStoreState } from "easy-peasy";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import dashboardBackground from '../images/dashboardBackground.png'; // Import using relative path

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "Fraunces, serif"
    },
    top: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: `url(${dashboardBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: 1200,
        // backgroundColor: 'red'
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
    share: {
        paddingTop: "120px"
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
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </div>
    );
};


export default Dashboard;