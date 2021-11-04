import './style.css';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

const Cover = ({ organization }) => {
  const { name, image, description } = organization;
  return (
    <div className="cover">
      {image ? <img className="img"
        src=
          'https://image.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg'/>
        : <Skeleton
          style={{ marginBottom: '3vh' }}
          variant="rectangular"
          width='100%'
          height={400} />}
      <div className="description">
        <h1 className="title" >{name}</h1>
        <h1 className="text" >{description}</h1>
      </div>
    </div>
  );
};

Cover.propTypes = {
  organization: PropTypes.object.isRequired,
};

export default Cover;
