import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import backVid from '../media/heroVid.mp4';
import mobileVid from '../media/mobileVid.mp4';

import calcTrees from '../utils/calcTrees';

const useStyles = makeStyles({
    top: {
        paddingTop: '100px',
        textAlign: 'center',
        height: 930,
        '@media (max-width: 900px)': {
            paddingTop: '0px',
            height: 1000,
        },
    },
    paper: {
        textAlign: 'left',
        color: 'white',
        paddingLeft: '10%',
        paddingRight: '10%',
        '@media (max-width: 900px)': {
            textAlign: 'center',
        },
    },
    titles: {
        position: 'relative',
    },
    welcome: {
        fontSize: '70pt',
        color: 'white',
        fontWeight: '900',
        '@media (max-width: 900px)': {
            fontSize: '40pt',
            paddingBottom: '5px',
        },
    },
    treeInfo: {
        position: 'relative',
        paddingLeft: '30%',
        paddingRight: '30%',
        fontSize: '16pt',
        color: 'white',
        '@media (max-width: 900px)': {
            paddingLeft: '10%',
            paddingRight: '10%',
        },
    },
    underlined: {
        fontSize: '50pt',
        fontWeight: '700',
        lineHeight: '1%',
        '@media (max-width: 900px)': {
            fontSize: '30pt',
        },
    },
    separator: {
        color: 'white',
        display: 'inline-block',
        width: '75%',
        background: 'white',
        height: '4px',
    },
    share: {
        paddingTop: '30px',
    },
    vid: {
        position: 'absolute',
        left: 0,
        top: 60,

        minHeight: '100%',
        maxHeight: '1080px',
        '@media (max-width: 500px)': {
            fontSize: '30pt',
        },
    },
});

export default function FirstPannel(props) {
    const classes = useStyles();
    let treesPlanted = calcTrees(props.customer.created_at, props.customer.product);
    treesPlanted = Math.ceil(treesPlanted);
    const percentageOfProgress = ((treesPlanted / 680) * 100).toFixed(0);

    return (
        <Grid item xs={12}>
            <ToggleVid></ToggleVid>
            <div className={classes.top}>
                <div className={classes.titles}>
                    <h1 className={classes.welcome}>welcome, {props.customer.first_name}</h1>
                    <Grid container className={classes.treeInfo}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{treesPlanted}</p>
                                <hr className={classes.separator}></hr>
                                <p>Trees planted to date.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{680 - treesPlanted}</p>
                                <hr className={classes.separator}></hr>
                                <p>Trees to go to erase your carbon footprint.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{percentageOfProgress}%</p>
                                <hr className={classes.separator}></hr>
                                <p>Of your lifetime carbon footprint erased.</p>

                                <p className={classes.share}>
                                    Take a screenshot and share your progress on social media.
                                </p>
                                <SocialIcon
                                    style={{ height: 40, width: 40, margin: 5 }}
                                    url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org"
                                    network="facebook"
                                    bgColor="white"
                                />
                                <SocialIcon
                                    style={{ height: 40, width: 40, margin: 5 }}
                                    url="https://twitter.com/intent/tweet?url=carbonforest.org&text="
                                    network="twitter"
                                    bgColor="white"
                                />
                                <SocialIcon
                                    style={{ height: 40, width: 40, margin: 5 }}
                                    url="https://www.instagram.com/carbon_forest/?hl=en"
                                    network="instagram"
                                    bgColor="white"
                                />
                                {/* <SocialIcon url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A" network="email" bgColor="white" /> */}
                                <p className={classes.share}>
                                    scroll for more <ArrowDropDownIcon></ArrowDropDownIcon>{' '}
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    );
}

function ToggleVid() {
    const classes = useStyles();

    if (window.innerWidth < 500) {
        return (
            <>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    id="video-background"
                    className={classes.vid}
                >
                    <source src={mobileVid} type="video/mp4" />
                </video>
            </>
        );
    } else {
        return (
            <>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    id="video-background"
                    className={classes.vid}
                >
                    <source src={backVid} type="video/mp4" />
                </video>
            </>
        );
    }
}
