import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  Stack,
  Modal,
  Alert,

} from '@mui/material';
import { BootstrapInput, containerBox, formContainer } from './styles';
import './style.css';

function JoinEvent({
  open = true, setOpen, eventId, message, setMessage, setClosed,
}) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
    isSubscriber: false,
  });

  const handleInputChange = (e) => {
    setMessage('');
    if (e.target.name === 'isSubscriber') {
      return setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.checked }));
    }
    return setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleClose = () => setOpen(false);
  const sendRequest = async () => {
    try {
      if (value.name && value.email && value.age && value.gender) {
        await axios.post(`/api/v1/events/${eventId}/attendance`, value);
        setMessage('Joined Successfuly. event details were sent to your email');
        setClosed(true);
        return setOpen(false);
      }
      return setMessage('all field must be filled');
    } catch (error) {
      return setMessage(error.response.data.error.message);
    }
  };
  const onFinish = (e) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ padding: '15px 0' }}
    >
      <>
        <CssBaseline />
        <form onSubmit={onFinish} >
          <Box sx={containerBox}>
            <CloseIcon onClick={handleClose} sx={{ margin: '10px 20px', cursor: 'pointer' }} />
            <Box
              sx={formContainer}
            >
              <div className='header-container'>
                <h2> Join Event</h2>
                <p>
                  You will receive an email that contains all the
                  event details
                </p>

              </div>
              { message
                && <Alert severity={message.includes('Successfuly')
                  ? 'success'
                  : 'error'}>
                  {message}!
                </Alert>}
              <div className='input-cont'>
                <FormControl variant="standard">
                  <InputLabel
                    shrink htmlFor="bootstrap-input"
                    sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Your Name:
                  </InputLabel>
                  <BootstrapInput
                    fullWidth={true}
                    placeholder="Name"
                    id="bootstrap-input"
                    sx={{ color: 'gray' }}
                    onChange={handleInputChange}
                    name='name'
                    required />

                </FormControl>
              </div>
              <div className='input-cont'>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input"
                    sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Your E-mail:
                  </InputLabel>
                  <BootstrapInput
                    fullWidth
                    placeholder="Email"
                    id="bootstrap-input"
                    sx={{ color: 'gray' }}
                    onChange={handleInputChange}
                    name='email'
                    type='email'
                    required/>
                </FormControl>
              </div>
              <div className='input-cont'>
                <FormControl variant="standard" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Your Phone Number:
                  </InputLabel>
                  <BootstrapInput
                    onChange={handleInputChange}
                    name='phone'
                    placeholder="Phone Number"
                    id="bootstrap-input"
                    sx={{ color: 'gray' }}
                    type='tel'
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </FormControl>
              </div>
              <div className='input-cont'>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Your Age:
                  </InputLabel>
                  <BootstrapInput
                    onChange={handleInputChange}
                    name='age'
                    placeholder="Age"
                    id="bootstrap-input"
                    sx={{ color: 'gray' }}
                    type='number'
                    required />
                </FormControl>
              </div>
              <div className='radio-cont input-cont'>
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={{ color: '#fff', fontSize: '14px' }}>
                    Select Your Gender :
                  </FormLabel>
                  <RadioGroup
                    onChange={handleInputChange}
                    required
                    row
                    aria-label="gender"
                    name="gender">
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio size='small'
                          sx={{ color: '#1AA195' }} />}
                      label="Female" />
                    <FormControlLabel
                      sx={{ fontSize: '12px' }}
                      value="male"
                      control={
                        <Radio
                          size='small'
                          sx={{ color: '#1AA195' }} />}
                      label="Male" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='input-cont'>
                <FormControlLabel
                  sx={{ width: '100%' }}
                  control={
                    <Checkbox
                      onChange={handleInputChange}
                      name='isSubscriber'
                      sx={{ color: '#1AA195', fontSize: '12px' }} />
                  } label="Subscribe me to similar events"
                  startIcon={<DeleteIcon />} />
              </div>
              <div>
                <Stack direction="row" spacing={2}>
                  <Button type='submit' variant="contained" sx={{ bgcolor: '#1AA195' }}>
                    + Join Event
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    startIcon={<DeleteIcon />}
                    sx={{ color: '#1AA195', borderColor: '#1AA195' }}
                  >
                    Cancel
                  </Button>
                </Stack>
              </div>
            </Box>
          </Box>

        </form>
      </>
    </Modal>
  );
}
JoinEvent.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  message: PropTypes.string.required,
  setMessage: PropTypes.func.isRequired,
  setClosed: PropTypes.func.isRequired,
};
export default JoinEvent;
