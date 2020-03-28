import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Hidden } from '@material-ui/core';

import FooterAdornment from '../../assets/Footer Adornment.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: theme.zIndex.modal + 1,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('xs')]: {
      height: '2.25em',
      width: '2.25em'
    }
  },
  socialContainer: {
    position: 'absolute',
    bottom: '1.25em',
    right: '1.5em'
  }
}))

export default ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(0)} to="/">
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => { setValue(1); setSelectedIndex(0) }}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => { setValue(1); setSelectedIndex(1) }}
                to="/custom-software"
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => { setValue(1); setSelectedIndex(2) }}
                to="/mobile-apps"
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => { setValue(1); setSelectedIndex(3) }}
                to="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(2)} to="/revolution">
                The Revolution
              </Grid>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(2)} to="/revolution">
                Vision
              </Grid>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(2)} to="/revolution">
                Technology
              </Grid>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(2)} to="/revolution">
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(3)} to="/about">
                About Us
              </Grid>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(3)} to="/about">
                History
              </Grid>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(3)} to="/about">
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} onClick={() => setValue(4)} to="/contact">
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img className={classes.adornment} src={FooterAdornment} alt="black decorative slash"/>

      <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
        <Grid item component={'a'} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={Facebook} alt="facebook logo" className={classes.icon}/>
        </Grid>
        <Grid item component={'a'} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={Twitter} alt="twitter logo" className={classes.icon}/>
        </Grid>
        <Grid item component={'a'} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={Instagram} alt="instagram logo" className={classes.icon}/>
        </Grid>
      </Grid>
    </footer>
  )
};