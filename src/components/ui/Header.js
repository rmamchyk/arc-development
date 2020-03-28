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
    color: 'white',
    opacity: .7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

export default ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    { name: 'Custom Software Development', link: '/custom-software', activeIndex: 1, selectedIndex: 1 },
    { name: 'Mobile App Development', link: '/mobile-apps', activeIndex: 1, selectedIndex: 2 },
    { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'services-menu' : undefined,
      ariaHaspopup: anchorEl ? 'true' : undefined,
      onMouseOver: e => handleClick(e)
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 }
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      if (window.location.pathname === `${route.link}`) {
          setValue(route.activeIndex);
          if (route.selectedIndex !== undefined) {
            setSelectedIndex(route.selectedIndex);
          }
      }
    })
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

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) =>
            <Tab
              key={index}
              className={classes.tab}
              component={Link}
              to={route.link}
              label={route.name}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.ariaHaspopup}
              onMouseOver={route.onMouseOver}
            />
        )}
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
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, index) => 
          <MenuItem
            key={index}
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
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((route, index) => 
            <ListItem
              key={index}
              onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{
                selected: classes.drawerItemSelected
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          )}

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(5) }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected
            }}
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
        <AppBar position="fixed" color="primary" className={classes.appbar}>
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
