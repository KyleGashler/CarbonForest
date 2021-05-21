import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import hat from '../media/hatCircle.png';
import sweat from '../media/sweatshirt.png';
import tee from '../media/tee.png';

const useStyles = makeStyles({
    separator2: {
        display: 'inline-block',
        width: '75%',
        background: '#E6600E',
        height: '5px',
    },
    shop: {
        textAlign: 'left',
        paddingLeft: '10px',
        paddingRight: '10px',
        color: 'black',
        height: '690px',
        fontWeight: 'bold',
        marginBottom: '50px',
        '@media (max-width: 900px)': {
            height: 2000,
            textAlign: 'center',
        },
    },
    hat: {
        backgroundImage: `url(${hat})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '550px',
        height: 420,
        paddingTop: '55px',
        '&:hover': {
            opacity: '0.5',
        },
    },
    tee: {
        backgroundImage: `url(${tee})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '500px',
        height: 400,
        paddingTop: '55px',
        '&:hover': {
            opacity: '0.5',
        },
    },
    sweat: {
        backgroundImage: `url(${sweat})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '500px',
        height: 400,
        paddingTop: '55px',
        '&:hover': {
            opacity: '0.5',
        },
    },
    invite: {
        paddingTop: '25px',
        paddingBottom: '50px',
        color: 'white',
        backgroundColor: '#9d4a91',
    },
    saving: {
        fontSize: 40,
        '@media (max-width: 900px)': {
            marginRight: '10px',
            marginLeft: '10px',
        },
    },
    productDetail: {
        textAlign: 'center',
        fontSize: '20pt',
    },
    title: {
        fontSize: '40pt',
        '@media (max-width: 900px)': {
            fontSize: '30pt',
            textAlign: 'center',
        },
    },
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: '#9d4a91',
        backgroundColor: 'white',
        fontWeight: 'bold',
        marginTop: '20px',
        fontSize: 30,
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
}))(Button);

export default function ShopPanel() {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12}>
            <div className={classes.shop}>
                <p style={{ marginBottom: '0' }} className={classes.title}>
                    Shop
                </p>
                <hr className={classes.separator2}></hr>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} lg={3} xl={3}>
                        <a href="https://carbonforest.org/products/carbonforest-eco-hoodie?pr_prod_strat=collection_fallback&pr_rec_pid=6588900311234&pr_ref_pid=6583387717826&pr_seq=uniform">
                            <div className={classes.sweat}></div>
                        </a>

                        <div className={classes.productDetail}>
                            <a href="https://carbonforest.org/products/carbonforest-eco-hoodie?pr_prod_strat=collection_fallback&pr_rec_pid=6588900311234&pr_ref_pid=6583387717826&pr_seq=uniform">
                                <p>CarbonForest Eco Hoodie</p>
                            </a>
                            <p>$48</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3} xl={3}>
                        <a href="https://carbonforest.org/products/carbon-forest-hat?_pos=1&_sid=100118769&_ss=r">
                            <div className={classes.hat}></div>
                        </a>
                        <div className={classes.productDetail}>
                            <a href="https://carbonforest.org/products/carbon-forest-hat?_pos=1&_sid=100118769&_ss=r">
                                <p>CarbonForest Eco-conscious Trucker Hat</p>
                            </a>
                            <p>$14</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3} xl={3}>
                        <a href="https://carbonforest.org/products/carbonforest-eco-triblend-tee?_pos=1&_sid=5dca28cab&_ss=r">
                            <div className={classes.tee}></div>
                        </a>
                        <div className={classes.productDetail}>
                            <a href="https://carbonforest.org/products/carbonforest-eco-triblend-tee?_pos=1&_sid=5dca28cab&_ss=r">
                                <p>CarbonForest Triblend Tee</p>
                            </a>
                            <p>$20</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.invite}>
                <p className={classes.saving}>Saving the world is better with friends!</p>
                <p className={classes.saving}>Invite your friends to join CarbonForest.</p>
                <a href="https://carbonforest.org/pages/refer">
                    <ColorButton className={classes.saving}>REFER A FRIEND</ColorButton>
                </a>
            </div>
        </Grid>
    );
}
