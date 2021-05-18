import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import map from '../media/TreeMap.png';

const useStyles = makeStyles({
    separator2: {
        display: 'inline-block',
        width: '75%',
        background: '#E6600E',
        height: '4px',
    },
    community: {
        textAlign: 'left',
        paddingTop: '1px',
        backgroundColor: 'gray',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontSize: '40pt',
        color: 'white',
        height: '1050px',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
            height: '1100px',
            textAlign: 'center',
            fontSize: '30pt',
        },
        '@media (max-width: 500px)': {
            height: '800px',
            textAlign: 'center',
            fontSize: '30pt',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
    },
    map: {
        backgroundImage: `url(${map})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: 500,
        '@media (max-width: 500px)': {
            height: 240,
        },
    },
    cfStats: {
        textAlign: 'center',
        fontSize: '30pt',
    },
    social: {
        fontSize: '15pt',
        paddingLeft: '12%',
        paddingRight: '12%',
        letterSpacing: '1px',
    },
    whoohoo: {
        paddingTop: '10px',
    },
});

export default function MapPanel(props) {
    const classes = useStyles();
    const customerCount = props.customer.customerCount ? props.customer.customerCount + 2 : 52;
    const treeCount = props.customer.treeCountTotal;

    return (
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className={classes.community}>
                <p style={{ marginBottom: '0' }}>Community impact.</p>
                <hr className={classes.separator2}></hr>
                <div className={classes.map}></div>
                <div className={classes.cfStats}>
                    <h3 className={classes.cfStats}>{treeCount} TREES PLANTED</h3>
                    <h3 className={classes.cfStats}>{customerCount} MEMBERS</h3>
                    <Grid container className={classes.social}>
                        <Grid item xs={12} sm={6}>
                            <SocialIcon
                                url="https://www.facebook.com/sharer/sharer.php?u=carbonforest.org"
                                network="facebook"
                                bgColor="white"
                                style={{ height: 40, width: 40, margin: 5 }}
                            />
                            <SocialIcon
                                url="https://twitter.com/intent/tweet?url=carbonforest.org&text="
                                network="twitter"
                                bgColor="white"
                                style={{ height: 40, width: 40, margin: 5 }}
                            />
                            <SocialIcon
                                url="https://www.instagram.com/carbon_forest/?hl=en"
                                network="instagram"
                                bgColor="white"
                                style={{ height: 40, width: 40, margin: 5 }}
                            />
                            <SocialIcon
                                url="mailto:caitlin@carbonforest.org?&subject=&cc=&bcc=&body=carbonforest.org%0A"
                                network="email"
                                bgColor="white"
                                style={{ height: 40, width: 40, margin: 5 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.whoohoo}>
                                Woo hoo! Take a screenshot and share your progress with friends.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Grid>
    );
}
