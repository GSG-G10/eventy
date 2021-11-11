import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Skeleton, Button, Stack, Snackbar, Alert,
} from '@mui/material';
import axios from 'axios';
import InfoCard from './InfoCard';
import JoinEvent from './JoinEvent';
import './style.css';

const SingleEventCard = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [isLoaded, setIsLoded] = useState(false);
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const history = useHistory();
  const { eventId } = useParams();
  const [message, setMessage] = useState('');

  useEffect(async () => {
    if (eventId > 0) {
      const { data } = await axios.get(`/api/v1/events/${eventId}`);
      setEventInfo(data);
      return setIsLoded(true);
    }
    // eslint-disable-next-line no-console
    return () => console.log('done');
  }, []);

  const butnStyle = { // style object for the button
    width: { lg: 300, sm: 200 },
    backgroundColor: '#D97904',
    color: '#FFFEFE',
    borderRadius: 5,
    fontSize: '1rem',
    fontWeight: 'bold',
  };
  const handleOpen = () => setOpen(true);
  const handleClosed = () => setClosed(!closed);
  return <section className='main-container'>
    <div className="event-container">
      {
        isLoaded // loader
          ? <>
            <div className="distributer">

              <div className="event-details">
                <h2>
                  {eventInfo.name}
                </h2>
                <Button
                  variant="text"
                  id='organizer-btn'
                  onClick={() => history.push(`/organization/${eventInfo.organizer_id}/${eventInfo.organizer}`)}>
                  {eventInfo.organizer}
                </Button>
                <div className="descriptionEvent">
                  <h4>
                Description
                  </h4>
                  <p>
                    {eventInfo.description}
                  </p>
                </div>
                <div className="details">
                  <h4>Why should you attend this event?</h4>
                  <p>
                    {eventInfo.details}
                  </p>
                </div>
              </div>
              <div className="event-card">
                <div className="btn-price">
                  <Button onClick={handleOpen} id='price-btn' variant="contained" sx={butnStyle}>GET TICKET
                    <small className='small-font'> {eventInfo.price === 0 ? 'Free' : `₪ ${eventInfo.price}`}</small></Button>
                </div>
                <InfoCard eventInfo={eventInfo} />
              </div>
              <JoinEvent
                open={open}
                setOpen={setOpen}
                eventId={eventInfo.id}
                message={message}
                setMessage={setMessage}
                setClosed={setClosed} />
              {message
              && <Snackbar open={closed} autoHideDuration={6000} onClose={handleClosed}>
                <Alert onClose={handleClosed} severity="success" sx={{ width: '100%' }}>
                  {message}
                </Alert>
              </Snackbar>}
            </div>
          </>
          : <Stack spacing={2} width='100%' height='70vh'sx={{ marginLeft: '2%' }}>
            <Skeleton variant="text" height={100} width={700} />
            <Skeleton variant="rectangular" width={600} height={100}/>
            <Skeleton variant="rectangular" width={410} height={318} />
          </Stack>
      }
    </div>
  </section>;
};

export default SingleEventCard;
