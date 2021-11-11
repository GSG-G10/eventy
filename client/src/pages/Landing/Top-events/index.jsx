import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EventsCard, Carousel } from '../../../components';

const TopEvents = () => {
  const [eventData, setData] = useState([]);
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const getTopEvents = async () => {
    const { data } = await axios.get('api/v1/events?type=top', {
      cancelToken: source.token,
    });
    setData(data);
    source.cancel('Operation canceled by the user');
  };

  useEffect(() => {
    getTopEvents();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.2%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#024059',
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
            <h3 style={{ padding: '2%', fontFamily: 'Paytone One', fontSize: '1.2rem' }}>Top events</h3>
            <p style={{ padding: '2%', fontSize: '0.8rem', width: '104%' }}>
              Some of our favourite events around your location
            </p>
          </div>
          <Link
            style={{
              padding: '2%',
              color: '#A64833',
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
