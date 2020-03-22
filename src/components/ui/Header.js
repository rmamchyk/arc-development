import React, { cloneElement, useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, useScrollTrigger,
  Tabs, Tab, Button, Menu, MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logoContainer: {
    padding: 0,
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: .7,
    '&:hover': {
      opacity: 1
    }
  }
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/services':
        setValue(1);
        setSelectedIndex(0);
        break;
      case '/custom-software':
        setValue(1);
        setSelectedIndex(1);
        break;
      case '/mobile-apps':
        setValue(1);
        setSelectedIndex(2);
        break;
      case '/websites':
        setValue(1);
        setSelectedIndex(3);
        break;
      case '/revolution':
        setValue(2);
        break;
      case '/about':
        setValue(3);
        break;
      case '/contact':
        setValue(4);
        break;
      default:
        break;
    }
  }, []);

  const handleChange = (e, value) => {
    setValue(value);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  }

  const handleMenuItemClick = (index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
    setValue(1);
  }

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/custom-software' },
    { name: 'Mobile App Development', link: '/mobile-apps' },
    { name: 'Website Development', link: '/websites' },
  ]

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img className={classes.logo} src={Logo} alt="company logo" />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
                aria-owns={anchorEl ? 'services-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                onMouseOver={e => handleClick(e)}
               />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
            <Menu
              id="servises-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose
              }}
              classes={{
                paper: classes.menu
              }}
              elevation={0}
            >
              {menuOptions.map((option, index) => 
                <MenuItem
                  key={`services-menu-item-${index}`}
                  onClick={() => {handleMenuItemClick(index)}}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  selected={index === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};
