import { useState } from 'react';
import {
  Button, Typography, Modal, Box,
} from '@mui/material';

import MyStepper from './stepper';

import './style .css';

const EventStepper = () => {
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
    height: '50vh',
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
          <Typography variant='h3'> Create Your Event </Typography>
          <MyStepper />
        </Box>
      </Modal>
    </>
  );
};
export default EventStepper;
