import { useHistory } from 'react-router-dom';
import eventy from '../Assets/eventy.png';

const Advertisment2 = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/organizations');
  };
  return (
    <div className='ad1-section'>
      <div className='ad2-container' >
        <img src={eventy} alt="eventy logo" style={{ height: '27vh' }} />
        <div className='ad2-content'>
          <h2 className='ad2-header'>Discover more organizations !</h2>
          <button
            variant="contained"
            type="submit"
            id='ad2-btn'
            onClick={handleSubmit}
          >
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisment2;
