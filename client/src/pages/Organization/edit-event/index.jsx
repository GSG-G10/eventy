import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TextField, Alert } from '@mui/material';

const styles = {
  containerOne: {
    border: '1px solid #0000',
    height: '85%',
    width: '90%',
    display: 'flex',
    marginTop: '1rem',
    marginBottom: '1rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
};

const EditEvent = ({ event, setSendRequest, sendRequest }) => {
  const [editedEvent, setEditedEvent] = useState(event);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(editedEvent) === JSON.stringify(event)) {
      setMessage('There is no edits');
    } else {
      axios.put(`/api/v1/events/${event.id}`, editedEvent)
        .then(() => {
          setMessage('Event Updated Succefully');
          setSendRequest(!sendRequest);
        })
        .catch(() => setMessage('Event Update Failed please try again later'));
    }
  };

  return (
    <>
      <h1 style={{ color: '#187F89', marginTop: '1rem' }}>Edit Event </h1>
      <form onSubmit={handleSubmit} style={styles.containerOne}>
        <TextField
          variant='filled'
          label='Name'
          name='name'
          value={editedEvent.name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant='filled'
          label='Description'
          name='description'
          multiline
          maxRows={4}
          value={editedEvent.description}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant='filled'
          label='Details'
          name='details'
          multiline
          maxRows={4}
          value={editedEvent.details}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant='filled'
          label='Location'
          name='location'
          value={editedEvent.location}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          variant='filled'
          label='Price'
          name='price'
          type='number'
          value={editedEvent.price}
          onChange={handleChange}
          required
          fullWidth
        />
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%',
        }} >
          <label>Start Date:</label>
          <TextField
            type='date'
            name='start_date'
            value={editedEvent.start_date.split('T')[0]}
            required
            onChange={handleChange}
          />
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%',
        }} >
          <label>Expire Date:</label>
          <TextField
            type='date'
            name='expire_date'
            value={editedEvent.expire_date.split('T')[0]}
            required
            onChange={handleChange}
          />
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%',
        }} >
          <label>Time :</label>
          <TextField
            type='time'
            name='duration'
            required
            value={editedEvent.duration}
            onChange={handleChange}
          />
        </div>
        <button
          style={{
            backgroundColor: '#187F89',
            border: '0',
            width: '15vh',
            height: '5vh',
            fontSize: '1rem',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: '1rem',
          }}
          type='submit'
        >
        Submit Edit
        </button>
      </form>
      {message && <Alert severity={message.includes('Failed') ? 'error' : 'success'}>{message}</Alert>}
    </>

  );
};

EditEvent.propTypes = {
  event: PropTypes.object.isRequired,
  sendRequest: PropTypes.bool.isRequired,
  setSendRequest: PropTypes.func.isRequired,
};

export default EditEvent;
