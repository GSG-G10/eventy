import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import eventy from '../Assets/eventy.png';

const Advertisment2 = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/organizations');
  };
  return (
    <div className='ad1-section'>
      <div className='ad2-container'>
        <img src={eventy} alt="eventy logo" />
        <div className='ad2-content'>
          <h2>Discover more organizations !</h2>
          <Button
            variant="contained"
            type="submit"
            id='ad2-btn'
            onClick={handleSubmit}
          >
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisment2;
