import './style.css';
import PropTypes from 'prop-types';

const Cover = ({ organization }) => {
  const { name, image, description } = organization;
  return (
    <div className="cover">

      <img className="img"
        src={image?.includes('dummyimage')
          ? 'https://image.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg'
          : image
        }/>

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
