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
    image: '',
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
      setValue({ ...value, image: evt.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (value.name && value.email && value.password && value.confirmPassword && value.description
        && value.image && value.categories) {
        if (value.password === value.confirmPassword) {
          const { data } = await axios.post('/api/v1/signup', value);
          const { organization } = data;
          localStorage.setItem('id', organization.id);
          localStorage.setItem('username', organization.name);
          history.push(
            `/organization/${organization.id}/${organization.name}`,
          );
          return history.go(0);
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
    <form id="Form" onSubmit={handleSubmit} style={{ marginLeft: '3rem' }}>
      <h4 style={{ fontWeight: 'bolder' }}>
        Create a new account. Once you‘ve set it up, you can take advantage of
        many benifits of membership.
      </h4>
      {errorMessage ? <Alert severity="error">{errorMessage}!</Alert> : ''}

      <TextField
        className="filled-basic"
        label="Organization Name"
        name="name"
        sx={{ backgroundColor: '#F3F3F3', width: '100%' }}
        required
        color="secondary"
        value={value.name}
        onChange={handleChange}
      />

      <TextField
        className="filled-basic"
        label="Email"
        name="email"
        type="email"
        style={{ backgroundColor: '#F3F3F3', width: '100%' }}
        required
        color="secondary"
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
        style={{ backgroundColor: '#F3F3F3' }}
        className="outlined-textarea"
        name="description"
        placeholder="Short words about your organization"
        color="secondary"
        required
        minRows={1}
        multiline
        value={value.description}
        onChange={handleChange}
      />

      <label htmlFor="contained-button-file" style={{ backgroundColor: '#fff', fontSize: '13px' }}>
          Enter organization’s logo
        <Input
          accept="image/*"
          className="contained-button-file"
          type="file"
          name="image"
          required
          onChange={handleUpload}
        />
      </label>

      <Button
        variant="contained"
        type="submit"
        style={{
          backgroundColor: '#D97904',
          fontWeight: '600',
          fontSize: '1.2rem',
        }}
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignUp;
