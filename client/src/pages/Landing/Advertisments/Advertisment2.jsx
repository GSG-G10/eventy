import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import eventy from '../Assets/eventy.png';

const Advertisment2 = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/organizations');
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
          borderRadius: '15px',
        }}
      >
        <img src={eventy} alt="eventy logo" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '60%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <h2>Discover more organizations !</h2>
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
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisment2;
