import { useEffect, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
  Link,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './styles';
import logo from './EVENTY_logo.png';
import './style.css';

const Header = ({ setRegisterType }) => {
  const history = useHistory();
  const [admin, setAdmin] = useState(false);

  useEffect(async () => {
    const { data } = await axios.get('/api/v1/isAdmin');
    if (data.id === 0) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  }, []);

  const handleLogOut = async () => {
    await axios.get('/api/v1/signout');
    localStorage.clear();
    setAdmin(false);
    history.push('/');
  };

  return (
    <Box id="header">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={styles.headerContainer}
          >
            <Link component={RouterLink} to="/">
              <img src={logo} alt="eventy logo" id="logo" />
            </Link>
            <Stack
              spacing={2}
              direction="row"
              style={styles.stack}
            >
              {!admin
                ? <>
                  <Link
                    to="/register"
                    component={RouterLink}
                    className='loginButn'
                    style={{
                      color: '#ffff',
                      textDecorationColor: '#ffff',
                      fontWeight: '500',
                      fontSize: '1.2rem',
                      width: '30%',
                    }}
                    id='login-link'
                    onClick={() => setRegisterType('2')}
                  >
                    Log In
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/register"
                    id='reg-link'
                  >
                    <Button
                      variant="contained"
                      className="register-button"
                      id="SignUp"
                      onClick={() => setRegisterType('1')}
                    >
             Register
                    </Button>
                  </Link>
                </>
                : <div id="registerContainer">
                  <Link component={RouterLink}
                    to={`/organization/${localStorage.getItem('id')}/${localStorage.getItem('username')}` } id='username'>
                    {localStorage.getItem('username')}
                  </Link>
                  <Button
                    id="logOut"
                    variant="contained"
                    className="register-button"
                    onClick={handleLogOut}
                  >
                    <LogoutIcon sx={{ marginRight: '5px' }} />
                    Log out
                  </Button>
                </div>

              }

            </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Header.propTypes = {
  setRegisterType: PropTypes.func.isRequired,
};

export default Header;
