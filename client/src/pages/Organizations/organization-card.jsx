import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  Grid, Button,
} from '@mui/material';

import './style.css';

const OrganizationCard = ({ organizationData }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/organization/${organizationData.id}/${organizationData.name}`);
  };

  return (
    <Grid className="organizationCard" container >
      <Grid className="organization-cover" item xs={4} >
        <img
          style={{ width: '100%', height: '100%' }}
          src="https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg"
        />
      </Grid>
      <Grid item className="organizationCardText">
        <Button
          variant="text"
          onClick={handleClick}
          sx={{
            mb: 2,
            color: '#187F75',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            border: 0,
          }}
          style= {{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: '40px',
            marginLeft: '-.6vh',
          }}
        >
          {organizationData.name}
        </Button>
        <h3 className="organization-description">
          {organizationData.description}
        </h3>
        <p style={{ fontSize: '1rem', marginTop: '2vh' }}> Catagories :
          {JSON.parse(organizationData.categories)
            .map((ele, i) => (i === 0 ? ` ${ele}` : ` , ${ele} `))}
        </p>
      </Grid>
    </Grid>
  );
};

OrganizationCard.propTypes = {
  organizationData: PropTypes.object.isRequired,
};

export default OrganizationCard;
