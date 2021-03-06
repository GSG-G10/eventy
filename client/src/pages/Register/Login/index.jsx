import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  TextField, Button, Alert, FormHelperText,
} from '@mui/material';
import axios from 'axios';
import './style.css';

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      if (value.email && value.password) {
        if (value.password.length >= 7) {
          const { data } = await axios.post('api/v1/login', value);
          const { organization } = data;
          localStorage.setItem('id', organization.id);
          localStorage.setItem('username', organization.name);
          history.push(`/organization/${organization.id}/${organization.name}`);
          return history.go(0);
        }
        return setErrorMessage('Password length must be more than 7 characters');
      }
      return setErrorMessage('Email and Password field must be filled');
    } catch (error) {
      if (error.response.status === 500) {
        return history.push('/error500');
      }
      return setErrorMessage(error.response.data.error.message);
    }
  };
  const handleInputChange = (e) => {
    setErrorMessage('');
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    backgroundColor: '#fff',
    opacity: '81%',
    width: '70%',
  };
  const btnStyle = {
    fontSize: '25px',
    backgroundColor: '#D97904',
    color: '#fff',
    width: '70%',
  };
  return <section className='login-section'>

    <div className="container">
      <div className="loginText">
        <p>
              Login to your account to see all events that you organize
        </p>
      </div>
      <form className='form-container' onSubmit={sendRequest}>
        {
          errorMessage
            ? <Alert severity="error">{errorMessage}!</Alert>
            : ''
        }
        <TextField
          hiddenLabel
          variant="filled"
          type='email'
          sx={inputStyle}
          placeholder='Email'
          onChange={handleInputChange}
          name='email'
          required />

        <TextField
          hiddenLabel
          variant="filled"
          type='password'
          sx={inputStyle}
          placeholder='Password'
          name='password'
          onChange={handleInputChange}
          required />
        <Button type='submit' variant="contained" sx={btnStyle}>Log in</Button>
      </form>
      <FormHelperText id="helper-text" sx={{ color: '#fff' }}>
          Return to <Link to='/'> Home </Link>
      </FormHelperText>
    </div>
  </section>;
};

export default Login;
