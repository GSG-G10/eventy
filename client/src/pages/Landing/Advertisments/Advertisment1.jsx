import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import createEvent from '../Assets/createEvent.png';
import './style.css';

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
          backgroundColor: '#F2A71B',
          height: '27vh',
          width: '75%',
          marginTop: '5%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '25px',
          fontFamily: 'Paytone One sans-serif',
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
          <h2 style={{
            color: 'white', fontFamily: 'Paytone One sans-serif', fontSize: '2.1rem', textAlign: 'center',
          }}>Let people hear about your events!</h2>
          <button
            className='discover-more-button'
            variant="contained"
            type="submit"
            style={{
              backgroundColor: '#ffff',
              fontSize: '0.9rem',
              width: '35%',
              borderRadius: '10px',
              color: '#024059',
              fontFamily: 'Paytone One',
              height: '6vh',
              fontWeight: '700',
              border: 'none',
            }}
            onClick={handleSubmit}
          >
            {' '}
            + Create your Event
          </button>
        </div>
        <img src={createEvent} alt="group of people" />
      </div>
    </div>
  );
};

export default Advertisment1;
