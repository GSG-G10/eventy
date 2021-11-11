import { useHistory } from 'react-router-dom';
import eventy from '../Assets/eventy.png';
import './style.css';

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
          backgroundColor: '#024059',
          height: '27vh',
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
          <h2 style={{ color: '#ffff', fontFamily: 'Paytone One sans-serif', fontSize: '2rem' }}>Discover more organizations !</h2>
          <button
            className='discover-more-button'
            variant="contained"
            type="submit"
            style={{
              backgroundColor: '#ffff',
              fontSize: '1rem',
              width: '35%',
              borderRadius: '10px',
              color: '#024059',
              fontFamily: 'Paytone One',
              height: '6vh',
              fontWeight: '600',
              border: 'none',
            }}
            onClick={handleSubmit}
          >
            {' '}
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisment2;
