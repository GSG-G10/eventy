import { useState } from 'react';
import {
  Button, Typography, Modal, Box,
} from '@mui/material';

import PropTypes from 'prop-types';
import MyStepper from './stepper';

import './style .css';

const EventStepper = ({ setSendRequest, sendRequest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 26,
    backgroundColor: 'rgba(255,255,255)',
    color: 'rgba(0,0,0)',
    borderRadius: '20px',
    p: 5,
  };

  return (
    <>
      <Button sx={{
        p: 1.5, minWidth: 300, fontSize: '1.3rem', fontWeight: 'bold', borderRadius: '10px',
      }} variant="contained" style={{ backgroundColor: '#187F75' }} onClick={handleOpen}> +  Create Event</Button>
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
