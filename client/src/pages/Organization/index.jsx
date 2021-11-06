import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Typography, Pagination, Skeleton, Snackbar, Alert,
} from '@mui/material';

import Cover from './cover';
import EventStepper from './create-event';
import OrganizationEventCard from './organization-event-card';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '5vh',
      backgroundColor: '#187F75',
      padding: '1.3rem',
    },
  },
}));

const Organization = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [isAdmin, setAdmin] = useState(false);
  const [userId, setUserId] = useState(0);
  const [organization, setOrganization] = useState({});
  const [organizationEvents, setOrganizationEvents] = useState([]);
  const [sendRequest, setSendRequest] = useState(false);
  const history = useHistory();

  const { organizationId } = useParams();

  useEffect(async () => {
    try {
      const { data: { id } } = await axios.get('/api/v1/isAdmin');
      setUserId(id);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    const organizationDataAPI = axios.get(`/api/v1/organizations/${organizationId}`);
    const organizationEventsAPI = axios.get(`/api/v1/events?organization=${organizationId}`);
    axios
      .all([organizationDataAPI, organizationEventsAPI])
      .then(axios.spread((...responses) => {
        setOrganization(responses[0].data);
        setOrganizationEvents(responses[1].data);
      }))
      .catch(() => {
        history.push('/error500');
      });
  }, [sendRequest]);

  return (
    <>
      <Cover organization={organization}/>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: '8vh', width: '100%',
      }}>
        <Typography
          sx={{ fontSize: { sm: '1.5rem', lg: '3rem' } }} color="white" variant='overline'>
          {organization.name ? organization.name : 'Organization'} Events:
        </Typography>
        {isAdmin && <EventStepper setSendRequest={setSendRequest} sendRequest={sendRequest} />}
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {organizationEvents?.length > 0
          ? (organizationEvents
            .map((event, index) => ((index + 1 > page * 3 - 3 && index + 1 <= page * 3)
              ? (
                <OrganizationEventCard setSendRequest={setSendRequest}
                  sendRequest={sendRequest} key={event.id} isAdmin={isAdmin} event={event}
                  userId={userId} setAdmin={setAdmin}
                />)
              : ''
            )))
          : (
            <Skeleton
              style={{ marginBottom: '3vh' }}
              variant="rectangular"
              width={ 1000 }
              height={300} />
          )
        }
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {organizationEvents.length > 3 ? (
          <Pagination
            classes={{ ul: classes.ul }}
            size="large"
            count={Math.ceil(organizationEvents.length / 3)}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        ) : (
          ''
        )}
      </div>
      {error && <Snackbar open={true} autoHideDuration={4000} >
        <Alert severity={ 'error' } sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>}
    </>
  );
};

export default Organization;
