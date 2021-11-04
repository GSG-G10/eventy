import axios from 'axios';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Button, Pagination, Paper, Divider, IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import EventsCard from '../../components/events-card';
import Loader from './Loader';
import FilterModal from './Modal';
import './style.css';
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
  const [search, setSearch] = useState();
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleOpen = () => {
    setOpen(true);
    setFilters({
      price: 1000,
      category: 'all',
      location: 'all',
    });
  };

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
  useEffect(() => {
    const filtered = events.filter(
      (org) => org.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredEvents(filtered.length > 0 ? filtered : events);
    setPage(1);
  }, [search]);

  const submitFilter = () => {
    setIsLoaded(false);
    const newData = events.filter((ele) => (ele.price <= filters.price
    && filters.category === 'all'
      ? true : ele.category.includes(filters.category)));
    setIsLoaded(true);
    setPage(1);
    setFilteredEvents(newData);
    setOpen(false);
  };
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
        <Button size="small" variant="outlined" sx={btnStyle} onClick={handleOpen}> <FilterListIcon /> Filter </Button>
        <Divider sx={{ height: 40, m: 1 }} orientation="vertical" />
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Search Events' onChange={handleSearchChange} />
          <IconButton sx={{ positin: 'absolute', right: '10%' }}>
            <SearchIcon />
          </IconButton>
        </div>
      </Paper>
      <FilterModal
        open={open}
        setOpen={setOpen}
        filters={filters}
        setFilters={setFilters}
        submitFilter={submitFilter}/>
    </section>
    <section className='events-section'>
      <div className="events-container">
        {
          // eslint-disable-next-line no-nested-ternary
          isLoaded
            ? events.length > 0
              ? filteredEvents.map((ele, i) => ((i + 1 > page * 9 - 9 && i + 1 <= page * 9)
                ? <EventsCard event={ele} key={i} />
                : '')) : <h2>{errorMessage}</h2>

            : <Loader />
        }
      </div>
      <div>

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
