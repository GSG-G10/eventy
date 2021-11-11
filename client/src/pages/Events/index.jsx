import axios from 'axios';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Button, Pagination, Paper, Divider,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import EventsCard from '../../components/events-card';
import Loader from './Loader';
import FilterModal from './Modal';

import styles from './styles';
import './style.css';
import Cover from '../Landing/Assets/Cover.png';
// for pagination
const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#187F75',
      padding: '1.3rem',
      margin: '30px 0',
      alignSelf: 'flex-end',
      justifySelf: 'flex-end',
    },
  },
}));
const EventsPage = () => {
  // States
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    price: 1000,
    category: 'all',
    location: 'all',
  });
  const [errorMessage, setErrorMessage] = useState('There is no events with this filter');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  // Handle Change
  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleOpen = () => {
    setOpen(true);
    setFilters({
      price: 1000,
      category: 'all',
      location: 'all',
    });
  };

  // handling filters
  const submitFilter = () => {
    setIsLoaded(false);
    const newData = events.filter((ele) => (ele.price <= filters.price
      && filters.category === 'all'
      ? true : ele.category.toLowerCase().includes(filters.category)));
    setIsLoaded(true);
    setPage(1);
    setFilteredEvents(newData);
    setOpen(false);
  };
  // Fetch Data from server
  useEffect(async () => {
    try {
      const { data } = await axios.get('/api/v1/events');
      setEvents(data);
      if (!filteredEvents.length) {
        setFilteredEvents(data);
      }
      setIsLoaded(true);
    } catch (err) {
      setErrorMessage(err.status);
      setIsLoaded(true);
    }
    // eslint-disable-next-line no-console
    return () => console.log('done');
  }, []);
  // search useEffect
  useEffect(() => {
    const filtered = events.filter(
      (org) => org.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredEvents(filtered.length > 0 ? filtered : events);
    setPage(1);
  }, [search]);

  return <>
    <section className="filter-container">
      {/* {Header Image} */}
      <div className="header-img">
        <img src={Cover} alt="event" />
      </div>
      {/* {Filter Nav} */}
      <Paper
        className="filter-nav"
        component="form"
        sx={styles.form}
      >
        <Button id='filterButn' size="medium" variant="outlined" sx={styles.button} onClick={handleOpen}>
          <FilterListIcon />
        Filter
        </Button>
        <Divider id='divider' sx={{ height: 35 }} orientation="vertical" />
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Search Events' onChange={handleSearchChange} />
        </div>
      </Paper>
      {/* {Filter Modal} */}
      <FilterModal
        open={open}
        setOpen={setOpen}
        filters={filters}
        setFilters={setFilters}
        submitFilter={submitFilter}/>
    </section>
    <section className='events-section'>
      <div className="events-container">
        { // Present Events
          // eslint-disable-next-line no-nested-ternary
          isLoaded
            ? filteredEvents.length > 0
              ? filteredEvents.map((ele, i) => ((i + 1 > page * 9 - 9 && i + 1 <= page * 9)
                ? <EventsCard event={ele} key={i} />
                : '')) : <h2 style={{ color: '#fff' }}>{errorMessage}</h2>

            : <Loader />
        }
      </div>
      <div>
        {/* Pagination */}
        {events.length > 9 ? (
          <Pagination
            classes={{ ul: classes.ul }}
            size="medium"
            count={Math.ceil(filteredEvents.length / 9)}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        ) : (
          ''
        )}
      </div>
    </section></>;
};

export default EventsPage;
