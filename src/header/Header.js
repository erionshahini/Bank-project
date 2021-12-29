import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png';
import './Header.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    marginLeft: '40px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'black',
      color: 'yellow',
    },
  },
  logo: {
    height: '5opx',
    objectFit: 'contain',
  },
  headerLink: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'right',
    '&:hover': {
      backgroundColor: 'black',
      color: 'yellow',
    },
  },
  headerOption: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px',
  },
  spacer: {
    paddingLeft: '30vw',
  },
  headerLineOne: {
    fontSize: '13px',
  },
  headerLineTwo: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
}));
const Header = () => {
  const classes = useStyles();
  const showAboutUs = () => {
    const elemnt = document.getElementById('about');
    if (elemnt) {
      elemnt.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const showProduct = () => {
    const elemnt = document.getElementById('product');
    if (elemnt) {
      elemnt.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const showPackage = () => {
    const elemnt = document.getElementById('package');
    if (elemnt) {
      elemnt.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const showContactUs = () => {
    const elemnt = document.getElementById('contactus');
    if (elemnt) {
      elemnt.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <ToolBar variant='dense'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='logo' />
          </Link>
          <Typography variant='h6'>MTD Bank</Typography>
          <Button className={classes.button} onClick={showAboutUs}>
            About US
          </Button>
          <Button className={classes.button} onClick={showProduct}>
            Product
          </Button>
          <Button className={classes.button} onClick={showPackage}>
            Package
          </Button>
          <Button className={classes.button} onClick={showContactUs}>
            Contact US
          </Button>
          <div className={classes.spacer}></div>
          <Link to='/login' className={classes.headerLink}>
            <div className={classes.headerOption}>
              <span className={classes.headerLineOne}>Hello</span>
              <span className={classes.headerLineTwo}>Sign In</span>
            </div>
          </Link>
          <Link to='/register' className={classes.headerLink}>
            <div className={classes.headerOption}>
              <span className={classes.headerLineOne}>New User</span>
              <span className={classes.headerLineTwo}>Register</span>
            </div>
          </Link>
        </ToolBar>
      </AppBar>
    </div>
  );
};
export default Header;

// npm i @material-ui/core
