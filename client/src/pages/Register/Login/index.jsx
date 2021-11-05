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
          await axios.post('api/v1/login', value);
          history.push('/');
        } else {
          setErrorMessage('Password length must be more than 7 characters');
        }
      } else {
        setErrorMessage('Email and Password field must be filled');
      }
    } catch (error) {
      setErrorMessage(error.response.data.error.message);
    }
  };
  const handleInputChange = (e) => {
    setErrorMessage('');
    const newValue = e.target.value;
    const inputName = e.target.name;
    setValue((prevState) => ({ ...prevState, [inputName]: newValue }));
  };

  const inputStyle = {
    backgroundColor: '#fff',
    opacity: '81%',
    width: '70%',
  };
  const btnStyle = {
    fontSize: '25px',
    backgroundColor: '#0D9488',
    color: '#fff',
    width: '70%',
  };
  return <section className='login-section'>

    <div className="container">
      <div className="header">
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
          id="outlined-basic"
          variant="filled"
          type='email'
          sx={inputStyle}
          placeholder='Email'
          onChange={handleInputChange}
          name='email'
          requiered />

        <TextField
          hiddenLabel
          id="outlined-basic"
          variant="filled"
          type='password'
          sx={inputStyle}
          placeholder='Password'
          name='password'
          onChange={handleInputChange}
          requiered />
        <Button type='submit' variant="contained" sx={btnStyle}>Log in</Button>
      </form>
      <FormHelperText id="helper-text" sx={{ color: '#fff' }}>
          You do not have account? <Link to='/signup'> Sign Up </Link>
      </FormHelperText>
    </div>
  </section>;
};

export default Login;
