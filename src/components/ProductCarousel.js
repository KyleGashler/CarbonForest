import React from 'react';
import {
    ButtonBack, ButtonNext,
    CarouselProvider, ImageWithZoom, Slide, Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import hat from '../images/hat.png';
import shirt from '../images/shirt.png';
import hoodie from '../images/hoodie.png';

const useStyles = makeStyles({
    slidesContainer: {
        display: "inline-block",
        height: "321px",
        width: "984px",
        textAlign: "center",
        alignContent: "center"
    },
    slidesButtonLeft: {

    },
    slidesButtonRight: {

    }
});

export default function Carousel() {
    const classes = useStyles();

    return (
        <CarouselProvider
            visibleSlides={3}
            totalSlides={4}
            naturalSlideWidth={200}
            naturalSlideHeight={250}
            hasMasterSpinner
            infinite
        >
            <Grid container className={classes.slidesContainer}>
                <Grid item xs={12}>
                    <ButtonBack className={classes.slidesButtonLeft} >Back</ButtonBack>
                </Grid>
                <Grid item xs={12}>
                    <Slider >
                        <Slide index={0}>
                            <ImageWithZoom src={hat} />
                            <p>TEST FOR TH IMAGE</p>
                        </Slide>
                        <Slide index={1}>
                            <ImageWithZoom src={shirt} />
                            <p>TEST FOR TH IMAGE</p>
                        </Slide>
                        <Slide index={2}>
                            <ImageWithZoom src={hoodie} />
                            <p>TEST FOR TH IMAGE</p>
                        </Slide>
                        <Slide index={3}>
                            <ImageWithZoom src={hoodie} />
                            <p>TEST FOR TH IMAGE</p>
                        </Slide>
                    </Slider>
                </Grid>
                <Grid item xs={12}>
                    <ButtonNext className={classes.slidesButtonRight} >Next</ButtonNext>
                </Grid>
            </Grid>
        </CarouselProvider>
    );
}