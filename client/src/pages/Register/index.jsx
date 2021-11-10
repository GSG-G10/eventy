import PropTypes from 'prop-types';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Signup from './SignUp';
import Login from './Login';

import './style.css';

const Register = ({ registerType, setRegisterType }) => {
  const handleChange = (event, newValue) => {
    setRegisterType(newValue);
  };

  return (
    <Box sx={{
      maxWidth: '60%',
      height: registerType === '1' ? '125vh' : '80vh',
      typography: 'body1',
      bgcolor: '#404143',
      color: 'white',
      marginLeft: '20%',
      marginTop: '2.5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
      padding: '1rem',
    }}>
      <TabContext value={registerType}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="inherit">
            <Tab label="Sign Up" value="1" />
            <Tab label="Sign In" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="signUpTab" sx={{
          height: '90%', width: '75%',
        }}>
          <Signup />
        </TabPanel>
        <TabPanel value="2" sx={{
          height: '90%', width: '75%',
        }}>
          <Login />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

Register.propTypes = {
  registerType: PropTypes.string.isRequired,
  setRegisterType: PropTypes.func.isRequired,
};

export default Register;
