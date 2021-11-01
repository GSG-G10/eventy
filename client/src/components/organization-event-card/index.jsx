import PropTypes from 'prop-types';
import {
  Typography, Grid, IconButton, Stack,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const OrganizationEventCard = ({ isAdmin, event }) => (
  <Grid flexDirection={{ sm: 'column', lg: 'row' }} bgcolor="rgba(255, 255, 255, .87)" maxWidth="50%" container >
    <Grid maxWidth={{ sm: '100%' }} item xs={5} >
      <img
        style={{ maxWidth: '100%' }}
        src={event.image}
      />
    </Grid>
    <Grid item mt={0.5} ml={2} xs={ 6 } maxWidth={{ sm: '85%' }}>
      <Stack direction="row" spacing={2} mt={4} alignItems="center" justifyContent="space-between">
        <Typography style={{ fontWeight: 'bold' }} variant="h5" >{event.name}</Typography>
        {isAdmin && <Stack direction="row" spacing={2}>
          <IconButton size="large" aria-label="edit" color="inherit">
            <EditRoundedIcon />
          </IconButton>
          <IconButton size="large" aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
        }
      </Stack>
      <Stack direction="column" mt={2}>
        <Stack direction="rows" alignItems="center">
          <IconButton size="large" aria-label="edit" color="inherit">
            <DateRangeIcon />
          </IconButton>
          <Typography variant="body2"> {event.start_date}</Typography>
        </Stack>
        <Stack direction="rows" alignItems="center">
          <IconButton size="large" aria-label="edit" color="inherit">
            <AccessTimeIcon />
          </IconButton>
          <Typography variant="body2" >{event.duration}</Typography>
        </Stack>
        <Stack direction="rows" alignItems="center">
          <IconButton size="large" aria-label="edit" color="inherit">
            <AddLocationIcon />
          </IconButton>
          <Typography variant="body2" >{event.place}</Typography>
        </Stack>
      </Stack>
    </Grid>
  </Grid>
);
OrganizationEventCard.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  event: PropTypes.object.isRequired,
};

export default OrganizationEventCard;
