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

  useEffect(async () => {
    const { data } = await axios.get('/api/v1/isAdmin');
    if (data.id === 0) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  }, []);

  // useEffect(async () => {
  //   const { data } = await axios.post('api/v1/login', value);
  //   const { organization } = data;

  // }),[];

  // const handleOrganizationName = async() => {
  //   const { data } = await axios.post('api/v1/login', value);
  //   const { organization } = data;
  // }

  const handleLogOut = async () => {
    await axios.get('/api/v1/signout');
    setAdmin(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
              <img src={logo} alt="eventy logo" style={{ height: '30px' }} />
            </Link>
            <Stack
              spacing={2}
              direction="row"
              style={{
                padding: '1%',
                width: '17%',
                justifyContent: 'space-around',
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
                    >
             Register
                    </Button>
                  </Link>
                </>
                : <Button
                  variant="contained"
                  className="register-button"
                  style={{
                    backgroundColor: '#187F75',
                    height: '31px',
                    fontWeight: '500',
                    width: '100%',
                    textDecoration: 'none',
                  }}
                  onClick={handleLogOut}
                >
           Log out
                </Button>

              }

            </Stack>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
