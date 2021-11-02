import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Pagination, Skeleton, Snackbar, Alert,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import OrganizationCard from './organization-card';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '5vh',
      backgroundColor: '#187F75',
      padding: '1.3rem',
    },
  },
}));

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'rgba(250,250,0,.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
  },
  searchContainer: {
    position: 'relative',
    top: '6vh',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vh',
  },
  searchField: {
    width: '75%',
    height: '8vh',
    backgroundColor: '#FFFBFB',
    border: '0',
    borderRadius: '20px',
    dropShadow: '75%',
    boxShadow: '4px 4px 4px 4px  rgba(250,250,250,.3)',
    fontSize: '1.8rem',
    padding: '1rem',

  },
};

const Organizations = () => {
  const classes = useStyles();
  const [organizations, setOrganizations] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(async () => {
    try {
      const { data } = await axios.get('./api/v1/organizations');
      setOrganizations(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return (
    <>
      <div style={styles.container}>
        <img
          className="img"
          style={{ height: '20vh', position: 'relative' }}
          src='https://www.seekpng.com/png/full/291-2917400_on-the-periphery-of-the-periphery-household-archaeology.png'
        />
        <div style={styles.searchContainer}>
          <input
            placeholder="Search For Organizations"
            style={styles.searchField}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8vh', marginTop: '10vh', width: '100%',
      }}>

        {organizations?.length > 0
          ? organizations.map((organization, index) => {
            if (index + 1 > page * 3 - 3 && index + 1 <= page * 3) {
              return <OrganizationCard
                key={organization.id}
                organization={organization}
              />;
            }
            return '';
          }) : (
            <>
              {[1, 2, 3].map((i) => <Skeleton
                key={i}
                style={{ marginBottom: '3vh' }}
                variant="rectangular"
                width={ 1000 }
                height={300} />)}
            </>
          )}
        {organizations.length > 3 ? (
          <Pagination
            classes={{ ul: classes.ul }}
            size="large"
            count={Math.ceil(organizations.length / 3)}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        ) : (
          ''
        )}
      </div>
      {error && <Snackbar open={true} autoHideDuration={4000} >
        <Alert severity={ 'error' } sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>}
    </>
  );
};

export default Organizations;
