import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EventsCard, Carousel } from '../../../components';

import '../style.css';

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
    <div className='landing-events-container'>
      <div className='landing-events-subCont'>
        <div className='landing-events-description-cont'>
          <div className='landing-events-description'>
            <h3 className='landing-category-title'>Top events</h3>
            <p className='landing-category-subtitle'>
              Some of our favourite events around your location
            </p>
          </div>
          <Link to="/events">
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
