import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import dashboardBackground from '../images/dashboardBackground.png';
import calcTrees from '../utils/calcTrees';

const useStyles = makeStyles({
    top: {
        textAlign: 'center',
        backgroundImage: `url(${dashboardBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        backgroundSize: 'cover',
        height: 950,
        '@media (max-width: 900px)': {
            height: 1360,
            backgroundPosition: 'top right',
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
        paddingTop: '180px',
    },
    welcome: {
        fontSize: '60pt',
        color: 'black',
        fontWeight: '900',
        '@media (max-width: 900px)': {
            fontSize: '40pt',
            paddingBottom: '30px',
        },
    },
    treeInfo: {
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
});

export default function FirstPannel(props) {
    const classes = useStyles();
    let treesPlanted = calcTrees(props.customer.created_at, props.customer.product);
    treesPlanted = Math.ceil(treesPlanted);
    const percentageOfProgress = ((treesPlanted / 680) * 100).toFixed(0);

    return (
        <Grid item xs={12}>
            <div className={classes.top}>
                <div className={classes.titles}>
                    <h1 className={classes.welcome}>welcome, {props.customer.first_name}</h1>
                    <Grid container className={classes.treeInfo}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.paper}>
                                <p className={classes.underlined}>{treesPlanted}</p>
                                <hr className={classes.separator}></hr>
                                <p>Trees planted to date.</p>
                                <p className={classes.share}>SHARE YOUR PROGRESS</p>
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
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    );
}
