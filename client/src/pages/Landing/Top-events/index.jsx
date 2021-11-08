import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EventsCard, Carousel } from '../../../components';
import Loader from '../../Events/Loader';

const TopEvents = () => {
  const [eventData, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const getTopEvents = async () => {
    const { data } = await axios.get('api/v1/events?type=top', {
      cancelToken: source.token,
    });
    setData(data);
    setIsLoaded(true);
    source.cancel('Operation canceled by the user');
  };

  useEffect(() => {
    getTopEvents();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
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
        {isLoaded
          ? <Carousel>
            {eventData.map((event) => (
              <EventsCard key={event.id} event={event} />
            ))}
          </Carousel>
          : <Loader />
        }

      </div>
    </div>
  );
};

export default TopEvents;
