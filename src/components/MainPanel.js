import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStoreState } from "easy-peasy";

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import dashboardBackground from '../images/dashboardBackground.png';
import calcTrees from '../utils/calcTrees';

const useStyles = makeStyles({
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
        paddingLeft: "10%",
        paddingRight: "10%",
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
        paddingLeft: "30%",
        paddingRight: "30%",
        fontSize: "16pt",
        color: "white",
    },
    underlined: {
        fontSize: "50pt",
        fontWeight: "700",
        lineHeight: "1%"
    },
    separator: {
        color: "white",
        display: "inline-block",
        width: "75%",
        background: "white",
        height: "4px",
    },
    share: {
        paddingTop: "30px"
    }
});



export default function FirstPannel() {
    const customer = useStoreState((state) => state.customer);
    const classes = useStyles();
    let treesPlanted = calcTrees(customer.created_at, customer.product);
    treesPlanted = Math.ceil(treesPlanted);

    return (

        <Grid item xs={12} >
            <div className={classes.top}>
                <div className={classes.titles}>
                    <h1 className={classes.welcome}>
                        welcome, {customer.first_name}.
                        </h1>
                    <Grid container className={classes.treeInfo}>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{treesPlanted}</p>
                                <hr className={classes.separator}></hr>
                                <p>Trees planted to date.</p>
                                <p className={classes.share}>SHARE YOUR PROGRESS</p>
                                <SocialIcon url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org" network="facebook" bgColor="white" />
                                <SocialIcon url="https://twitter.com/intent/tweet?url=carbonforest.org&text=" network="twitter" bgColor="white" />
                                <SocialIcon url="https://www.instagram.com/carbon_forest/?hl=en" network="instagram" bgColor="white" />
                                {/* <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" /> */}
                                <p className={classes.share}>scroll for more <ArrowDropDownIcon></ArrowDropDownIcon> </p>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{680 - treesPlanted}</p>
                                <hr className={classes.separator}></hr>
                                <p>Trees to go to erase your carbon footprint.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{Math.ceil(treesPlanted / 680)}%</p>
                                <hr className={classes.separator}></hr>
                                <p>Of your lifetime carbon footprint erased.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    );
}