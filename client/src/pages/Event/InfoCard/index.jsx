import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import './style.css';

const InfoCard = ({ eventInfo }) => {
  const {
    start_date: startDate, expire_date: endDate, location, duration, attendance,
  } = eventInfo;

  return <div className="info-card">
    <h2>
        Event Information
    </h2>
    <div className='card-container'>
      <p className='card-element' >
        <EventIcon fontSize='15px' backgroundColor='#D97904' />  Start Date :{startDate.split('T')[0]}
      </p>
      <p className='card-element' >
        <EventIcon fontSize='15px' /> End Date : {endDate.split('T')[0]}
      </p>
      <p className='card-element' >
        <AccessTimeIcon fontSize='15px' /> Time : {duration}
      </p>
      <p className='card-element' >
        <LocationOnOutlinedIcon fontSize='15px' /> location : {location}
      </p>
      <p className='card-element' >
        <PeopleIcon fontSize='15px' /> Attendance : {attendance}
      </p>
      <a href={'https://calendar.google.com/calendar/u/0/r'} target='_blank' rel="noreferrer"> Add To Calender </a>
    </div>
  </div>;
};
InfoCard.propTypes = {
  eventInfo: PropTypes.object.isRequired,
};
export default InfoCard;
