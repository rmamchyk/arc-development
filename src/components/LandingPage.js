import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import {
  makeStyles, Grid, Button, Typography, useTheme, useMediaQuery,
  Card, CardContent
} from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';
import CallToAction from './ui/CallToAction';
import animationData from '../animations/landinganimation/data';
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg';
import MobileAppsIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';
import RevolutionBackground from '../assets/repeatingBackground.svg';
import InfoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em'
    }
  },
  estimateButton: {
    ...theme.typography.estimateButton,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    minWidth: 150,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    paddingLeft: 20,
    paddingRight: 20,
    height: 45,
    minWidth: 150
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
  heroTextContainer: {
    minWidth: '22em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
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
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  revolutionContainer: {
    height: '100em',
    marginTop: '12em',
    backgroundImage: `url(${RevolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%'
    }
  },
  infoContainer: {
    height: '80em',
    backgroundImage: `url(${InfoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
}));

export default ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*----- Hero section -----*/}
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology<br/>to the Midwest
            </Typography>

            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button component={Link} to="/estimate"  onClick={() => setValue(5)} className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.learnButtonHero} variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Services section -----*/}
      <Grid item>
        <Grid container direction="row" justify={matchesSM ? 'center' : undefined } className={classes.serviceContainer}>
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
        <Grid container direction="row" justify={matchesSM ? 'center' : 'flex-end' } className={classes.serviceContainer}>
          <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
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
            <img className={classes.icon} src={MobileAppsIcon} alt="mobile phone icon" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row" justify={matchesSM ? 'center' : undefined } className={classes.serviceContainer}>
          <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
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
          <Grid item>
            <img className={classes.icon} src={WebsiteIcon} alt="website icon" />
          </Grid>
        </Grid>
      </Grid>

      {/*----- Revolution section -----*/}
      <Grid item>
        <Grid container alignItems="center" justify="center" className={classes.revolutionContainer}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                  </Typography>
                  <Button component={Link} to="/revolution" onClick={() => setValue(2)} className={classes.learnButtonHero} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /> 
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/*----- Information section -----*/}
      <Grid item>
        <Grid container alignItems="center" className={classes.infoContainer}>
          <Grid
            item
            container
            direction={matchesXS ? 'column' : 'row'}
            style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : (matchesSM ? '2em' : '5em'),
                marginBottom: matchesXS ? '10em' : 0
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>About Us</Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button component={Link} to="/about" onClick={() => setValue(3)} className={classes.learnButton} style={{ color: 'white', borderColor: 'white' }} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : (matchesSM ? '2em' : '5em'),
                textAlign: matchesXS ? 'center' : 'right'
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>Contact Us</Typography>
                <Typography variant="subtitle2">Say hello! <span role="img" aria-label="waving hand">👋🏻</span></Typography> 
                <Grid item>
                  <Button component={Link} to="/contact" onClick={() => setValue(4)} className={classes.learnButton} style={{ color: 'white', borderColor: 'white' }} variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----- CTA section -----*/}
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};
