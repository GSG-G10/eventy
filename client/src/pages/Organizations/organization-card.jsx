import PropTypes from 'prop-types';
import {
  Grid, Button,
} from '@mui/material';

const OrganizationCard = ({ organization }) => (
  <Grid
    style={{ marginBottom: '5vh', color: 'black' }}
    flexDirection={{ sm: 'column', lg: 'row' }}
    bgcolor="rgba(255, 255, 255, .87)"
    maxWidth={{ sm: '60%', lg: '55%' }}
    container
  >
    <Grid maxWidth={{ sm: '100%' }} item xs={5} >
      <img
        style={{ maxWidth: '100%' }}
        src="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg"
      />
    </Grid>
    <Grid item mt={3} ml={2} xs={ 6 } sx={{ p: 3 }} maxWidth={{ sm: '75%' }}
      style={{
        display: 'flex', flexDirection: 'column', justufyContent: 'space-between',
      }}
    >
      <Button
        variant="outlined"
        sx={{
          mb: 2,
          color: '#187F75',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          maxWidth: { sm: '100%', lg: '80%' },
        }}
      >
        {organization.name}
      </Button>
      <h3 style={{ fontSize: '1.3rem' }}>
        {organization.description}
      </h3>
      Catagories : {organization.categories}
    </Grid>
  </Grid>
);

OrganizationCard.propTypes = {
  organization: PropTypes.object.isRequired,
};

export default OrganizationCard;
