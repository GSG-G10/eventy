import { useState } from 'react';

import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Signup from './SignUp';
import Login from './Login';

const Register = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{
      maxWidth: '60%',
      height: '85vh',
      typography: 'body1',
      bgcolor: '#404143',
      color: 'white',
      marginLeft: '20%',
      marginTop: '4.5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
      padding: '1rem',
    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="white" >
            <Tab label="Sign Up" value="1" />
            <Tab label="Sign In" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{
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

export default Register;
