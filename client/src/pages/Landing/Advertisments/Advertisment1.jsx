import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import createEvent from '../Assets/createEvent.png';

const Advertisment1 = () => {
  const [admin, setAdmin] = useState(false);
  const history = useHistory();

  useEffect(async () => {
    const { data } = await axios.get('/api/v1/isAdmin');
    if (data.id === 0) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  }, []);

  const handleSubmit = () => {
    if (admin) {
      history.push(
        `/organization/${localStorage.getItem('id')}/${localStorage.getItem(
          'username',
        )}`,
      );
    } else {
      history.push('/register');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#f0f0f0',
          height: '30vh',
          width: '75%',
          marginTop: '5%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '25px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <h2>Let people hear about your events!</h2>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: '#187F75',
              fontSize: '0.8rem',
            }}
            onClick={handleSubmit}
          >
            {' '}
            +Create your Event
          </Button>
        </div>
        <img src={createEvent} alt="group of people" />
      </div>
    </div>
  );
};

export default Advertisment1;
