import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './EVENTY_logo.png';
import './style.css';

const Header = () => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const { data } = axios.get('/api/v1/isAdmin');
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
  };

  return (
    <Box sx={{ flexGrow: 1 }} id="header">
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
                width: '17%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {!admin
                ? <>
                  <Link
                    to="/register"
                    component={RouterLink}
                    style={{
                      color: '#ffff',
                      textDecorationColor: '#ffff',
                      fontWeight: '400',
                      fontSize: '1rem',
                      width: '39%',
                    }}
                  >
           log in
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/signup"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <Button
                      variant="contained"
                      className="register-button"
                      style={{
                        backgroundColor: '#187F75',
                        height: '31px',
                        fontWeight: '500',
                        width: '82%',
                        textDecoration: 'none',
                      }}
                      id="SignUp"
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

export default Header;
