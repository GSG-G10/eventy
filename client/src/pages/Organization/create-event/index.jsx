import { useState } from 'react';
import {
  Button, Typography, Modal, Box,
} from '@mui/material';

import PropTypes from 'prop-types';
import style from './style';
import MyStepper from './stepper';

import './style .css';

const EventStepper = ({ setSendRequest, sendRequest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button sx={{
        p: 1, minWidth: 200, fontSize: '1rem', fontWeight: '700', borderRadius: '5px',
      }} variant="contained" style={{
        backgroundColor: '#D97904',
      }}
      onClick={handleOpen}> +  Create Event</Button>
      <Modal
        style={{ display: 'flex', width: '100%' }}
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4' sx={{ paddingBottom: '15px' }}> Create Your Event </Typography>
          <MyStepper setSendRequest={setSendRequest} sendRequest={sendRequest} />
        </Box>
      </Modal>
    </>
  );
};

EventStepper.propTypes = {
  setSendRequest: PropTypes.func.isRequired,
  sendRequest: PropTypes.bool.isRequired,
};

export default EventStepper;
