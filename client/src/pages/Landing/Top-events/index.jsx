import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EventsCard, Carousel } from '../../../components';

const TopEvents = () => {
  const [eventData, setData] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('api/v1/events?type=top');
    setData(data);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
          width: '75%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '96%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ padding: '2%' }}>Top events</h3>
            <p style={{ padding: '2%', fontSize: '0.8rem', width: '104%' }}>
              Some of our favorite events around your location
            </p>
          </div>
          <Link
            style={{
              padding: '2%',
              color: 'white',
              textDecorationLine: 'underline',
            }}
            to="/events"
          >
            See all
          </Link>
        </div>
        <Carousel>
          {eventData.map((event) => (
            <EventsCard key={event.id} event={event} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopEvents;
