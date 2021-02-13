import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { AuthContext } from '../App'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function Navbar() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='Home Page' onClick={() => history.push('/blog')}>
          <ListItemIcon> <HomeTwoToneIcon style={{ color: 'blue' }} /> </ListItemIcon>
          <ListItemText primary='Home Page' />
        </ListItem> <Divider />
        <ListItem button key='Create New Account' onClick={() => history.push('/signup')}>
          <ListItemIcon> < AccountCircleTwoToneIcon style={{ color: 'blue' }} /> </ListItemIcon>
          <ListItemText primary='Create New Account' />
        </ListItem> <Divider />
        <ListItem button key='Add New Post' onClick={() => history.push('/create')}>
          <ListItemIcon> <PostAddTwoToneIcon style={{ color: 'blue' }} /> </ListItemIcon>
          <ListItemText primary='Add New Post' />
        </ListItem>
      </List>
      <Divider />
    </div>
  );


  const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('localToken');
    setToken(null);
    setCurrentuser(null);
    history.push('/blog');
  }

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {token ? (<div className={classes.root}>
        <AppBar position="static">
          <Toolbar >
            <div>
              <React.Fragment key='left'>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                  {list('left')}
                </Drawer>
              </React.Fragment>
            </div>
            <Typography onClick={() => history.push('/blog')} variant="h6" className={classes.title}>
              Sahin's Blog
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {currentuser?.username}
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>) :
        (<div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <div>
                <React.Fragment key='left'>
                  <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                  </Drawer>
                </React.Fragment>
              </div>
              <Typography variant="h6" className={classes.title}>
                Sahin's Blog
            </Typography>
              {auth && (
                <div>
                  <h3 onClick={() => history.push('/signin')}  >Login</h3>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>)}
    </>


  );
}