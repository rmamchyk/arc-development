import React, { cloneElement, useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, useScrollTrigger, Tabs, Tab, IconButton,
  Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer,
  List, ListItem, ListItemText
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
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
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
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
  },
  drawerIcon: {
    height: 45,
    width: 45
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white'
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  }
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
    setValue(1);
  }

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/custom-software' },
    { name: 'Mobile App Development', link: '/mobile-apps' },
    { name: 'Website Development', link: '/websites' },
  ];

  const tabs = (
    <>
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
        open={openMenu}
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
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/">
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/services">
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/revolution">
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/about">
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/contact">
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemEstimate}
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};
