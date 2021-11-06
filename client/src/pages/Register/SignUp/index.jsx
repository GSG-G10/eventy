import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, Button, Input, Alert,
} from '@mui/material';
import CategoriesSelector from './Categories';
import Password from './Password';
import './style.css';

const SignUp = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    categories: [],
    description: '',
    photo: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setErrorMessage('');
    const inputName = e.target.name;
    setValue((prevState) => ({ ...prevState, [inputName]: e.target.value }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // eslint-disable-next-line func-names
    reader.onload = function (evt) {
      setValue({ ...value, photo: evt.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (value.name && value.email && value.password && value.confirmPassword && value.description
        && value.photo && value.categories) {
        if (value.password === value.confirmPassword) {
          await axios.post('/api/v1/signup', value);
          const { organization } = data;
          return history.push(
            `/organization/${organization.id}/${organization.name}`,
          );
        }
        return setErrorMessage(
          'Password value should be equal to confirmed password value',
        );
      } return setErrorMessage('Please, fill all fields!');
    } catch (error) {
      if (error.response.status === 403) {
        return setErrorMessage('Account is already exist. Please sign in!');
      }
      if (error.response.status === 500) {
        return history.push('/error500');
      }
      return setErrorMessage(error.response.data.error.message);
    }
  };

  return (
    <div id="Form-container">
      <form id="Form" onSubmit={handleSubmit}>
        <h2>
          <span
            style={{
              textDecorationLine: 'underline',
              textDecorationColor: '#A794C1',
            }}
          >
          Register
          </span>{' '}
        / <span style={{ fontWeight: '100' }}>Login</span>
        </h2>

        <p style={{ fontWeight: '100', fontSize: '0.9rem' }}>
        Create a new account. Once you‘ve set it up, you can take advantage of
        many benifits of membership.
        </p>
        {errorMessage ? <Alert severity="error">{errorMessage}!</Alert> : ''}

        <TextField
          id="filled-basic"
          label="Organization Name"
          name="name"
          style={{ backgroundColor: '#d9d9d9', width: '100%' }}
          required
          variant="filled"
          color="secondary"
          size="small"
          value={value.name}
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          label="Email"
          name="email"
          type="email"
          style={{ backgroundColor: '#d9d9d9', width: '100%' }}
          required
          variant="filled"
          color="secondary"
          size="small"
          value={value.email}
          onChange={handleChange}
        />

        <Password
          password={value.password}
          confirmPassword={value.confirmPassword}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
          showPassword={showPassword}
          setShowConfirmPassword={handleClickShowConfirmPassword}
          showConfirmPassword={showConfirmPassword}
        />

        <CategoriesSelector
          value={value.categories}
          handleChange={handleChange}
        />

        <TextField
          style={{ backgroundColor: '#d9d9d9', height: '56px' }}
          id="outlined-textarea"
          name="description"
          placeholder="Short words about your organization"
          color="secondary"
          required
          multiline
          value={value.description}
          onChange={handleChange}
        />

        <label htmlFor="contained-button-file" style={{ color: '#d9d9d9', fontSize: '13px' }}>
          Enter organization’s logo
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            name="photo"
            required
            onChange={handleUpload}
          />
        </label>

        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: '#187F75',
            fontWeight: '600',
            fontSize: '1.2rem',
          }}
        >
          {' '}
        Sign up
        </Button>
      </form>
    </div>

  );
};

export default SignUp;
