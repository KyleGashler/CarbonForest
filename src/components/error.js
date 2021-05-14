import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
    },
    card: {
        textAlign: 'center',
    },
    cover: {
        width: 451,
        margin: 'auto',
    },
});

export default function ErrorModule() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cover}>
                <CardMedia
                    component="img"
                    alt="errorTree"
                    height="600"
                    image="https://images.freeimages.com/images/large-previews/e59/autumn-tree-1408307.jpg"
                    title="errorTree"
                />
                <CardContent className={classes.card}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hmmmm...
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Your information was not found. Please register an account with
                        CarbonForest!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    className={classes.cover}
                    size="small"
                    color="primary"
                    onClick={() => {
                        window.location.href = 'https://carbonforest.org/account/register';
                    }}
                >
                    Register
                </Button>
            </CardActions>
        </Card>
    );
}
