import './style.css';
import PropTypes from 'prop-types';

const Cover = ({ name, description, photo }) => (
  <div className="cover">
    {photo && <img className="img" src={photo}/>}
    <div className="description">
      <h1 className="title" >{name}</h1>
      <h1 className="text" >{description}</h1>
    </div>
  </div>
);

Cover.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default Cover;
