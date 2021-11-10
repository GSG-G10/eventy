import { Button } from '@mui/material';
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
    <div className='ad1-section'>
      <div className='ad1-container'>
        <div className='ad1-content'>
          <h2>Let people hear about your events!</h2>
          <Button
            variant="contained"
            type="submit"
            id='ad1-create-btn'
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
