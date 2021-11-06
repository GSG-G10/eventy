import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import {
  Grid, Button,
} from '@mui/material';

const OrganizationCard = ({ organizationData }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/organization/${organizationData.id}/${organizationData.name}`);
  };

  return (
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
          variant="text"
          onClick={handleClick}
          sx={{
            mb: 2,
            color: '#187F75',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            border: 0,
            maxWidth: { sm: '100%', lg: '80%' },
          }}
          style= {{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: '25%',
            marginLeft: '-.6vh',
          }}
        >
          {organizationData.name}
        </Button>
        <h3 style={{ fontSize: '1.3rem' }}>
          {organizationData.description}
        </h3>
        <p style={{ fontSize: '1rem', marginTop: '2rem' }}>Catagories : {organizationData.categories}</p>
      </Grid>
    </Grid>
  );
};

OrganizationCard.propTypes = {
  organizationData: PropTypes.object.isRequired,
};

export default OrganizationCard;
