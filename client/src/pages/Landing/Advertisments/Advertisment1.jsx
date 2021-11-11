import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import createEvent from '../Assets/createEvent.png';
import illustration5 from '../Assets/5.svg';
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
    <div>
      <div>
        <img src={illustration5} width={400} height={280} style={{ position: 'absolute', marginTop: '2%', right: '68%' }}/>
      </div>
      <div className='ad1-section'>
        <div className='ad1-container'>
          <div className='ad1-content'>
            <h2 className='ad2-header'>Let people hear about your events!</h2>
            <Button
              variant="contained"
              type="submit"
              id='ad2-btn'
              onClick={handleSubmit}
            >
              {' '}
            +Create your Event
            </Button>
          </div>
          <img src={createEvent} alt="group of people" />
        </div>
      </div>
    </div>

  );
};

export default Advertisment1;
