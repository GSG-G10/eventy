import { useState } from 'react';
import {
  Typography, Grid, IconButton, Stack,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
// import useMediaQuery from '@mui/material/useMediaQuery';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddLocationIcon from '@mui/icons-material/AddLocation';

// props : admin ? & event data
const OrganizationCard = () => {
  // const faisel = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useState(true);
  return (
    <Grid flexDirection={{ sm: 'column', lg: 'row' }} bgcolor="rgba(255, 255, 255, .87)" maxWidth="50%" container >
      <Grid maxWidth={{ sm: '100%' }} item xs={5} >
        <img
          style={{ maxWidth: '100%' }}
          src="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg"
        />
      </Grid>
      <Grid item mt={0.5} ml={2} xs={6}>
        <Stack direction="row" spacing={8} mt={2} alignItems="center" justifyContent="space-between">
          <Typography style={{ fontWeight: 'bold' }} variant="h5" >Hackathon Start Up</Typography>
          {admin && <Stack direction="row" >
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
            <Typography variant="body2"> Sun , November 03,  2021 </Typography>
          </Stack>
          <Stack direction="rows" alignItems="center">
            <IconButton size="large" aria-label="edit" color="inherit">
              <AccessTimeIcon />
            </IconButton>
            <Typography variant="body2" >03:00 PM</Typography>
          </Stack>
          <Stack direction="rows" alignItems="center">
            <IconButton size="large" aria-label="edit" color="inherit">
              <AddLocationIcon />
            </IconButton>
            <Typography variant="body2" >Online</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OrganizationCard;
