/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EventsCard, Carousel } from '../../../components';
import Loader from '../../Events/Loader';
import illustration4 from '../Assets/4.svg';
import '../style.css';

const ExclusiveEvents = () => {
  const [eventData, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const getTopEvents = async () => {
    const { data } = await axios.get('api/v1/events?type=exlusive', {
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
    <>
      <div>
        <img src={illustration4} width={440} height={300} style={{
          position: 'fixed',
          marginTop: '45%',
          marginLeft: '64.5%',
          transform: 'rotate(146)',
        }} />
      </div>
      <div className='landing-events-container'>
        <div className='landing-events-subCont'>
          <div className='landing-events-description-cont'>
            <div className='landing-events-description'>
              <h3 className='landing-category-title'>Exclusive events</h3>
              <p className='landing-category-subtitle'>
                Some of exclusive events around your location
              </p>
            </div>
            <Link to="/events">
              { eventData.length > 0 ? 'See all' : 'Discover other events'}
            </Link>
          </div>
          {isLoaded
            ? eventData.length > 0
              ? <Carousel>
                {eventData.map((event) => (
                  <EventsCard key={event.id} event={event} />
                ))}
              </Carousel>
              : <h3>No current events with this type.</h3>
            : <Loader />
          }
        </div>
      </div>
    </>
  );
};

export default ExclusiveEvents;
