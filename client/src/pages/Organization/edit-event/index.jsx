import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

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

const EditEvent = ({ event }) => {
  const [editedEvent, setEditedEvent] = useState(event);

  const handleChange = (e) => {
    setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    axios.put(`/api/v1/events/${event.id}`, editedEvent); // .then .catch
  };

  return (
    <>
      <h1 style={{ color: '#187F89', marginTop: '1rem' }}>Edit Event </h1>
      <div style={styles.containerOne}>
        <TextField
          variant='filled'
          label='Name'
          name='name'
          value={editedEvent.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant='filled'
          label='Descreption'
          name='description'
          multiline
          maxRows={4}
          value={editedEvent.description}
          onChange={handleChange}
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
          fullWidth
        />
        <TextField
          variant='filled'
          label='Location'
          name='location'
          value={editedEvent.location}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          variant='filled'
          label='Price'
          name='price'
          type='number'
          value={editedEvent.price}
          onChange={handleChange}
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
            value={editedEvent.duration}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: '#187F89', marginBottom: '1rem' }}
        onClick={handleClick}
      >
        Submit Edit
      </Button>
    </>

  );
};

EditEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EditEvent;
