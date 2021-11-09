import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Pagination, Skeleton } from '@mui/material';

import OrganizationCard from './organization-card';

import { styles, useStyles } from './styles';
import './style.css';

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
        <img
          className="img"
          style={{ position: 'relative', objectFit: 'cover' }}
          src='https://www.seekpng.com/png/full/291-2917400_on-the-periphery-of-the-periphery-household-archaeology.png'
        />
        <div style={styles.searchContainer}>
          <input
            className="search"
            placeholder="Search For Organizations"
            style={styles.searchField}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="organization-container">
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
            size="medium"
            count={Math.ceil(filter.length / 3)}
            variant="outlined"
            color="secondary"
            page={page}
            className="pagination"
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
