import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './style.css';

const index = () => {
  const history = useHistory();
  return (
    <div className="error-page">
      <div className="error-details">
        <h1>500</h1>
        <h2>Internal Server Error</h2>
        <p>
      The server encountered an internal error and was unable to complete your
      request.
        </p>
      </div>
      <Button
        variant="outlined"
        onClick={() => history.push('/')}
        style={{ marginTop: '2rem' }}
      >Return to Homepage</Button>
    </div>

  );
};

export default index;
