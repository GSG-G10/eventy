import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Pagination, Skeleton } from '@mui/material';
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
    height: '250px',
    backgroundColor: 'rgba(250,250,250,.13)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
    position: 'relative',
  },
  searchContainer: {
    position: 'absolute',
    top: '210px',
    width: '100%',
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
    fontSize: '1.5rem',
    padding: '1rem',
    outline: 'none',

  },
};

const Organizations = () => {
  const classes = useStyles();
  const [organizations, setOrganizations] = useState([]);
  const [filter, setFiltered] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const history = useHistory();

  useEffect(async () => {
    try {
      const { data } = await axios.get('./api/v1/organizations');
      setOrganizations(data);
      setFiltered(data);
    } catch (err) {
      history.push('/error500');
    }
  }, []);

  useEffect(() => {
    const filtered = organizations.filter(
      (org) => org.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(filtered.length > 0 ? filtered : organizations);
  }, [search]);

  return (
    <>
      <div style={styles.container}>
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

        {organizations.length > 0
          ? filter
            .map((organizationData, index) => ((index + 1 > page * 3 - 3 && index + 1 <= page * 3)
              ? (
                <OrganizationCard
                  key={organizationData.id}
                  organizationData={organizationData}
                />)
              : ''
            ))
          : (
            <>
              {[1, 2, 3].map((i) => <Skeleton
                key={i}
                style={{ marginBottom: '3vh' }}
                variant="rectangular"
                width={ 1000 }
                height={300} />)}
            </>
          )}
        {filter.length > 3 ? (
          <Pagination
            classes={{ ul: classes.ul }}
            size="large"
            count={Math.ceil(filter.length / 3)}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Organizations;
