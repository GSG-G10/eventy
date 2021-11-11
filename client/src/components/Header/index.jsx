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
    history.go(0);
  };

  return (
    <Box id="header" style={{ height: '6vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link component={RouterLink} to="/">
              <img src={logo} alt="eventy logo" style={{ height: '30px' }} id="logo" />
            </Link>
            <Stack
              spacing={2}
              direction="row"
              style={{
                padding: '1%',
                width: '40%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {!admin
                ? <>
                  <Link
                    to="/register"
                    component={RouterLink}
                    className='link-login'
                    style={{
                      color: '#ffff',
                      textDecorationColor: '#ffff',
                      fontWeight: '400',
                      fontSize: '1rem',
                      width: '12%',
                    }}
                    onClick={() => setRegisterType('2')}
                  >
           log in
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/register"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <Button
                      variant="contained"
                      className="register-button"
                      style={{
                        backgroundColor: '#ffff',
                        color: '#D97904',
                        border: '#D97904 solid 2px',
                      }}
                      onClick={() => setRegisterType('1')}
                    >
             Register
                    </Button>
                  </Link>
                </>
                : <div id="registerContainer">
                  <Link component={RouterLink} to={`/organization/${localStorage.getItem('id')}/${localStorage.getItem('username')}` } style={{
                    color: 'white',
                    fontSize: '1.2rem',
                  }}>{localStorage.getItem('username')}</Link>
                  <Button
                    id="logOut"
                    variant="contained"
                    className="register-button"
                    style={{
                      backgroundColor: '#187F75',
                      fontSize: '0.5rem',
                    }}
                    onClick={handleLogOut}
                  >
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
