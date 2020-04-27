import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme, Grid, Typography, Button, useMediaQuery } from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg';
import MobileAppsIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
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
    }
}));

const Services = ({ setValue, setSelectedIndex}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column">
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    marginTop: matchesSM ? '1em' : '2em'
                }}
            >
                <Typography
                    variant="h2"
                    gutterBottom
                    align={matchesSM ? 'center' : undefined}
                >
                    Services
                </Typography>
            </Grid>

            <Grid item>
                <Grid 
                    container
                    direction="row"
                    justify={matchesSM ? 'center' : 'flex-end' }
                    className={classes.serviceContainer}
                    style={{ marginTop: matchesSM ? '1em' : '5em' }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? 'center' : undefined,
                            width: matchesSM ? undefined : '35em'
                        }}
                    >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate you web experience or create a standalone app{matchesSM ? null : <br />}with either mobile platform.
                        </Typography>
                        <Button component={Link} to="/mobile-apps" onClick={() => { setValue(1); setSelectedIndex(2) }} className={classes.learnButton} variant="outlined">
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img
                            className={classes.icon}
                            src={MobileAppsIcon}
                            width="250em"
                            alt="mobile phone icon"
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify={matchesSM ? 'center' : undefined }
                    className={classes.serviceContainer}
                >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{' '}<span className={classes.specialText}>celebration.</span> 
                        </Typography>
                        <Button component={Link} to="/custom-software" onClick={() => { setValue(1); setSelectedIndex(1) }} className={classes.learnButton} variant="outlined">
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={CustomSoftwareIcon} alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify={ matchesSM ? 'center' : 'flex-end' }
                    className={classes.serviceContainer}
                    style={{ marginBottom: '10em' }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? 'center' : undefined,
                            width: matchesSM ? undefined : '35em'
                        }}
                    >
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach more. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button component={Link} to="/websites" onClick={() => { setValue(1); setSelectedIndex(3) }} className={classes.learnButton} variant="outlined">
                            <span style={{ marginRight: 10 }}>Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img
                            className={classes.icon}
                            src={WebsiteIcon}
                            width="250em"
                            alt="website icon"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Services;
