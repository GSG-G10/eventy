import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import {
  Typography, Grid, IconButton, Stack, Modal, Box, Alert, AlertTitle, Button, Snackbar,
} from '@mui/material';

import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const style = {
  box: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { sm: 250, lg: 400 },
    height: { sm: 230, lg: 200 },
    bgcolor: 'rgba(255, 255, 255, .87)',
    boxShadow: 30,
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',

  },
  alert: {
    width: { sm: 200 },
    height: '60%',
    fontSize: '1.29rem',
  },
  button: {
    width: '50%',
    marginBottom: '1.5vh',
  },
};

const OrganizationEventCard = ({
  isAdmin, setAdmin, event, deleted, setDeleted, userId,
}) => {
  const [id, setId] = useState(0);
  const [message, setMessage] = useState('');
  const [statusCode, setStatusCode] = useState(0);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  if (userId === Number(event.organizer_id)) {
    setAdmin(true);
  }

  const handleOpen = () => setOpen(!open);

  const handleDelete = () => {
    axios.delete(`/api/v1/events/${id}`).then((res) => {
      setMessage(res.data.message);
      setOpen(false);
      setDeleted(!deleted);
    }).catch(() => {
      setMessage('Something Error Happened, Please try again later');
      setStatusCode(400);
      setOpen(false);
    });
  };

  const handleClick = (e) => {
    const eventId = e.target.value;
    history.push(`/event/${eventId}/${event.name}`);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
          <Alert style={style.alert} variant="filled" severity="info">
            <AlertTitle>Attention</AlertTitle>
            Are you sure you want to  <strong>Delete This Event ? </strong>
          </Alert>
          <Button style={style.button} variant="contained" color="error" onClick={handleDelete}>
          yes
          </Button>
        </Box>
      </Modal>
      <Grid
        style={{ marginBottom: '5vh' }}
        flexDirection={{ sm: 'column', lg: 'row' }}
        bgcolor="rgba(255, 255, 255, .87)"
        maxWidth={{ sm: '60%', lg: '55%' }}
        container
      >
        <Grid maxWidth={{ sm: '100%' }} item xs={5} >
          <img
            style={{ maxWidth: '100%' }}
            // src={event.image}
            src="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg"
          />
        </Grid>
        <Grid item mt={0.5} ml={2} xs={ 6 } maxWidth={{ sm: '85%' }}>
          <Stack direction="row" spacing={2} mt={4} alignItems="center" justifyContent="space-between" >
            <Button
              style={{ fontWeight: 'bold', fontSize: '1rem', color: '#187F75' }}
              variant="outlined"
              value={event.id}
              onClick={handleClick}
            >
              {event.name}
            </Button>
            {isAdmin && <Stack direction="row" spacing={2}>
              <IconButton size="large" aria-label="edit" color="inherit">
                <EditRoundedIcon />
              </IconButton>
              <IconButton size="large" aria-label="delete" color="error" onClick={() => {
                setOpen(!open);
                setId(event.id);
              }}>
                <DeleteIcon />
              </IconButton>
            </Stack>
            }
          </Stack>
          <Stack direction="column" mt={2} >
            <Stack direction="rows" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <DateRangeIcon />
              </IconButton>
              <Typography variant="body1"> {event.start_date.split('T')[0]}</Typography>
            </Stack>
            <Stack direction="rows" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <AccessTimeIcon />
              </IconButton>
              <Typography variant="body1" >{event.duration}</Typography>
            </Stack>
            <Stack direction="rows" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <AddLocationIcon />
              </IconButton>
              <Typography variant="body1" >{event.location}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {message && <Snackbar open={true} >
        <Alert severity={statusCode === 400 ? 'error' : 'success'} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>}
    </>
  );
};
OrganizationEventCard.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired,
  deleted: PropTypes.bool.isRequired,
  setDeleted: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  setAdmin: PropTypes.func.isRequired,
};

export default OrganizationEventCard;
