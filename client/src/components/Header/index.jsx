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

const Header = () => (
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
          <img src={logo} alt="eventy logo" style={{ height: '30px' }} />
          <Stack
            spacing={2}
            direction="row"
            style={{
              padding: '1%',
              width: '17%',
              justifyContent: 'space-around',
            }}
          >
            <Link
              href="/login"
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
            <Button
              variant="contained"
              className="register-button"
              style={{
                backgroundColor: '#187F75',
                height: '31px',
                fontWeight: '500',
                width: '82%',
              }}
            >
              Register
            </Button>
          </Stack>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
