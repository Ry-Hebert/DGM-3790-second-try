import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InfoIcon from '@material-ui/icons/Info'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Login from './Login'
import { useLoginContext } from '../contexts/LoginContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const loginCtx = useLoginContext()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    setAnchorEl(null);
    loginCtx.login()
  };

  const [state, setState] = React.useState(null);
  const openMenu = Boolean(state)

  const toggleDrawer = (event) => {
    setState(!openMenu);
  };

  const closeDrawer = () => {
    setState(false);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClose={closeDrawer}
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem component={Link} to={'/'} button key='About'>
          <ListItemIcon><InfoIcon></InfoIcon></ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem component={Link} to={'/shipList'} button key='App Display'>
          <ListItemIcon><PlayCircleFilledIcon></PlayCircleFilledIcon></ListItemIcon>
          <ListItemText primary='App Display' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem component={Link} to={'/favorites'} button key='Favorite Lists'>
          <ListItemIcon><FavoriteIcon /></ListItemIcon>
          <ListItemText primary='Favorite Lists' />
        </ListItem>
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {['left'].map((anchor) =>(
          <IconButton key={anchor} onClose={closeDrawer} onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Drawer anchor={anchor} state={state} open={openMenu} onClose={closeDrawer}>
              {list()}
            </Drawer>
          </IconButton>
          ))}
          <Typography variant="h6" className={classes.title}>
            React App Project
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
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
                {!loginCtx.isAuth ? 
                (
                    <Login onClick={handleClose}/>
                ) : 
                (
                    <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
                )
                }
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}