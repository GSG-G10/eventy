import {
  Typography, Grid, IconButton, Stack,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import './style.css';

const OrganizationCard = () => (
  <Grid className="container" container spacing={0}>
    <Grid item p={2}>
      <img src="https://picsum.photos/id/1005/400/250" />
    </Grid>
    <Grid item p={2} >
      <Stack direction="row" spacing={8} mt={2}>
        <Typography style={{ fontWeight: 'bold' }} variant="h4" >Hackathon Start Up</Typography>
        <Stack direction="row" >
          <IconButton aria-label="edit" color="inherit">
            <EditRoundedIcon />
          </IconButton>
          <IconButton aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Grid>
  </Grid>
);

export default OrganizationCard;
