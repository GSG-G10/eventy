import { useState } from 'react';
import {
  Button, Typography, Modal, Box,
} from '@mui/material';

import MyStepper from './stepper';

import './style .css';

const EventStepper = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 26,
    backgroundColor: 'rgba(255,255,255,.45)',
    color: 'rgba(0,0,0)',
    borderRadius: '20px',
    p: 10,
    height: '40vh',
  };

  return (
    <>
      <Button onClick={handleOpen}>Create Event</Button>
      <Modal
        style={{ display: 'flex', width: '100%' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h3'>Create Your Event </Typography>
          <MyStepper />
        </Box>
      </Modal>
    </>
  );
};
export default EventStepper;
