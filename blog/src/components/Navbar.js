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
}));

export default function Navbar() {

  const { token, setToken, currentuser, setCurrentuser } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('localToken');
    // localStorage.setItem('localToken','');
    setToken(null);
    setCurrentuser(null);
    history.push('/blog');
  }

  console.log('currentusser navbar ', currentuser)

  const classes = useStyles();
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
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
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
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              </IconButton> */}
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