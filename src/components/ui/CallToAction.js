import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, makeStyles, useTheme, Button, useMediaQuery } from '@material-ui/core';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    ctaContainer: {
        height: '60em',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit'
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    estimateButton: {
        ...theme.typography.estimateButton,
        borderRadius: 50,
        height: 80,
        minWidth: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

const CallToAction = ({setValue}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid
            container
            direction={matchesSM ? 'column' : 'row'}
            alignItems="center"
            justify={matchesSM ? 'center' : 'space-between'}
            className={classes.ctaContainer}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    marginBottom: matchesSM ? '2em' : 0,
                    textAlign: matchesSM ? 'center' : 'inherit'
                }}
            >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software.<br/>Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid item container justify={matchesSM ? 'center' : undefined}>
                            <Button component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.learnButton} variant="outlined">
                                <span style={{ marginRight: 10 }}>Learn more</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item
                style={{
                    marginRight: matchesSM ? 0 : '5em',
                    marginLeft: matchesSM ? 0 : '4em'
                }}
            >
                <Button component={Link} to="/estimate" onClick={() => setValue(5)} variant="contained" className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    );
}

export default CallToAction;
