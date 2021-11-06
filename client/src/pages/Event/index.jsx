import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Skeleton, Button, Stack } from '@mui/material';
import axios from 'axios';
import InfoCard from './InfoCard';
import './style.css';

const SingleEventCard = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [isLoaded, setIsLoded] = useState(false);

  const history = useHistory();
  const { eventId } = useParams();

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
    width: 300,
    backgroundColor: '#03DAC5',
    color: '#000',
    opacity: '70%',
    borderRadius: 11,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };
  return <section className='main-container'>
    <div className="event-container">
      {
        isLoaded // loader
          ? <>
            <div className="event-image">
              <img src={'https://img.freepik.com/free-vector/events-concept-illustration_114360-931.jpg?size=626&ext=jpg'} alt="event image" />
            </div>
            <div className="distributer">

              <div className="event-details">
                <h2>
                  {eventInfo.name}
                </h2>
                <Button variant="text" style={{
                  maxWidth: '13%',
                  color: '#03DAC5',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginRight: '2.5rem',
                  marginLeft: '2.3rem',
                }}
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
                <p className='price'>
                  {eventInfo.price === 0 ? 'Free' : `₪ ${eventInfo.price}`}
                </p>
                <Button variant="contained" sx={butnStyle}>GET TICKET</Button>
                <InfoCard eventInfo={eventInfo} />
              </div>
            </div>
          </>
          : <Stack spacing={2} width='70vw' height='70vh'>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="rectangular" width={600} height={100} />
            <Skeleton variant="rectangular" width={410} height={318} />
          </Stack>
      }
    </div>
  </section>;
};

export default SingleEventCard;
