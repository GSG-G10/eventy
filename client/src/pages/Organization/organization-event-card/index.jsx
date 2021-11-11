import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import {
  Typography, Grid, IconButton, Stack, Modal, Box, Alert, AlertTitle, Button, Snackbar,
} from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import EditEvent from '../edit-event';

import style from './styles';
import '../style.css';

const OrganizationEventCard = ({
  isAdmin, setAdmin, event, sendRequest, setSendRequest, userId,
}) => {
  const [id, setId] = useState(0);
  const [statusCode, setStatusCode] = useState();
  const [OpenModelDelete, setOpenModeDelete] = useState(false);
  const [OpenModelEdit, setOpenModeEdit] = useState(false);

  const history = useHistory();

  if (userId === Number(event.organizer_id)) {
    setAdmin(true);
  }

  const handleOpenModelDelete = () => setOpenModeDelete(!OpenModelDelete);
  const handleOpenModelEdit = () => setOpenModeEdit(!OpenModelEdit);

  const handleDelete = () => {
    axios.delete(`/api/v1/events/${id}`).then(() => {
      setOpenModeDelete(false);
      setSendRequest(!sendRequest);
    }).catch(() => {
      setStatusCode(400);
      setOpenModeDelete(false);
    });
  };

  const handleClick = (e) => {
    const eventId = e.target.value;
    history.push(`/event/${eventId}/${event.name}`);
  };
  return (
    <>
      <Modal
        open={OpenModelDelete}
        onClose={handleOpenModelDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box1}>
          <Alert style={style.alert} variant="filled" severity="error">
            <AlertTitle>Attention</AlertTitle>
            Are you sure you want to  <strong> Delete This Event ? </strong>
          </Alert>
          <Button style={style.button} variant="contained" color="error" onClick={handleDelete}>
          yes
          </Button>
        </Box>
      </Modal>
      <Modal
        open={OpenModelEdit}
        onClose={handleOpenModelEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box2}>
          <EditEvent
            setOpenModeEdit={setOpenModeEdit}
            event={event}
            sendRequest={sendRequest}
            setSendRequest={setSendRequest}
          />
        </Box>
      </Modal>
      <Grid
        bgcolor="rgba(255, 255, 255, 0.87)"
        sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;' }}
        className="organizationEventCard"
        container
      >
        <Grid maxWidth={{ sm: '100%' }} item xs={5} className="eventOrgCover">
          <img
            style={{ width: '100%', height: '100%' }}
            src={event.image}
          />
        </Grid>
        <Grid item ml={2} xs={ 6 } maxWidth={{ sm: '85%' }} className="eventOrgDetails" >
          <Stack flexDirection="row" spacing={1} mt={2} alignItems="flex-start" justifyContent="space-between" >
            <Button
              variant="text"
              value={event.id}
              onClick={handleClick}
              className="eventOrgButton"
            >
              {event.name}
            </Button>
            {isAdmin && <Stack direction= 'row' alignItems= 'baseline' spacing={1}>
              <IconButton size="large" aria-label="edit" color="inherit"onClick={() => {
                handleOpenModelEdit(true);
                setId(event.id);
              }}>
                <EditRoundedIcon />
              </IconButton>
              <IconButton size="large" aria-label="delete" color="error" onClick={() => {
                handleOpenModelDelete(true);
                setId(event.id);
              }}>
                <DeleteIcon />
              </IconButton>
            </Stack>
            }
          </Stack>
          <Stack direction="column" mt={1} >
            <Stack direction="row" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <DateRangeIcon />
              </IconButton>
              <Typography variant="body1"> {event.start_date.split('T')[0]}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <AccessTimeIcon />
              </IconButton>
              <Typography variant="body1" >{event.duration}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <AddLocationIcon />
              </IconButton>
              <Typography variant="body1" >{event.location}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <IconButton size="large" aria-label="edit" color="inherit">
                <PeopleIcon />
              </IconButton>
              <Typography variant="body1" >{event.attendance}</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {statusCode && <Snackbar open={true} >
        <Alert severity={statusCode === 400 ? 'error' : 'success'} sx={{ width: '100%' }}>
          {statusCode === 400 ? 'Something error happened please try again' : 'Event deleted succefully'}
        </Alert>
      </Snackbar>}
    </>
  );
};
OrganizationEventCard.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired,
  sendRequest: PropTypes.bool.isRequired,
  setSendRequest: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  setAdmin: PropTypes.func.isRequired,
};

export default OrganizationEventCard;
