import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import EventsCard from '../../components/events-card';
import Loader from './Loader';
import './style.css';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    const { data } = await axios.get('/api/v1/events');
    setEvents(data);
    setIsLoaded(true);
    // eslint-disable-next-line no-console
    return () => console.log('done');
  }, []);
  const btnStyle = {
    height: '70%',
    fontSize: '15px',
    color: '#797575',
    border: '#797575 1px solid',
  };
  return <>
    <section className="filter-container">
      <div className="header-img">
        <img src="https://bevents.co/wp-content/uploads/2020/02/events.jpg" alt="event" />
      </div>
      <Paper
        component="form"
        sx={{
          p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%', justifyContent: 'space-around', height: '50px', position: 'absolute', left: '10%', top: '15vh',
        }}
      >
        <Button size="small" variant="outlined" sx={btnStyle}> <FilterListIcon /> Filter </Button>
        <Divider sx={{ height: 40, m: 1 }} orientation="vertical" />
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Search Events' />
          <IconButton sx={{ positin: 'absolute', right: '10%' }}>
            <SearchIcon />
          </IconButton>
        </div>
      </Paper>
    </section>
    <section className='events-section'>
      <div className="events-container">
        {
          isLoaded && events
            ? events.map((ele, i) => <EventsCard event={ele} key={i} />)
            : <Loader />
        }
      </div>
    </section></>;
};

export default EventsPage;
