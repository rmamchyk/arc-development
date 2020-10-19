import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme, Grid, Typography, Button, TextField, useMediaQuery } from '@material-ui/core';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
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
        },
        marginRight: '5em',
        marginLeft: '4em',
        [theme.breakpoints.down('md')]: {
            marginRight: 0,
            marginLeft: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimateButton,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

const Contact = ({ setValue }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <Grid container direction="row">
            {/*----- Contact Us -----*/}
            <Grid
                item
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{
                    marginBottom: matchesMD ? '5em' : 0,
                    marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
                }}
                lg={4}
                xl={3}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? 'center' : undefined} style={{ lineHeight: 1 }}>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? 'center' : undefined} style={{ color: theme.palette.common.blue }}>
                                We're waiting.
                            </Typography>
                        </Grid>
                        <Grid item container alignItems="center" style={{ marginTop: '2em' }}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{ marginRight: '0.5em' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
                                    (555) 555-555
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems="center" style={{ marginBottom: '2em' }}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" style={{ marginRight: '0.5em', verticalAlign: 'middle' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
                                    zachary@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: '20em' }}>
                            <Grid item style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{ marginBottom: '0.5em' }}>
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: '20em' }}>
                            <TextField
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className={classes.message}
                                multiline
                                rows={10}
                                InputProps={{
                                    disableUnderline: true
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: '2em' }}>
                            <Button
                                variant="contained"
                                className={classes.sendButton}
                            >
                                Send Message
                                <img src={airplane} alt="paper airplane" style={{ marginLeft: '1em' }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/*----- CTA section -----*/}
            <Grid
                item
                container
                className={classes.background}
                direction={matchesMD ? 'column' : 'row'}
                alignItems="center"
                justify={matchesMD ? 'center' : undefined}
                lg={8}
                xl={9}
            >
                <Grid
                    item
                    style={{
                        marginLeft: matchesMD ? 0 : '3em',
                        marginBottom: matchesMD ? '2em' : 0,
                        textAlign: matchesMD ? 'center' : 'inherit'
                    }}
                >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
                                Simple Software.<br/>Revolutionary Results.
                            </Typography>
                            <Typography variant="subtitle2" align={matchesMD ? 'center' : undefined} style={{ fontSize: '1.5rem' }}>
                                Take advantage of the 21st Century.
                            </Typography>
                            <Grid item container justify={matchesMD ? 'center' : undefined}>
                                <Button component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.learnButton} variant="outlined">
                                    <span style={{ marginRight: 10 }}>Learn more</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Button component={Link} to="/estimate" onClick={() => setValue(5)} variant="contained" className={classes.estimateButton}>
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Contact;
