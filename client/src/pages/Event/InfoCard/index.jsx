import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const InfoCard = ({ eventInfo }) => {
  const {
    start_date: startDate, expire_date: endDate, location, duration,
  } = eventInfo;

  return <div className="info-card">
    <h4 >
        Event Information
    </h4>
    <div style={{
      display: 'flex', flexDirection: 'column', width: '85%', height: '70%', justifyContent: 'space-evenly', alignItems: 'baseline',
    }}>
      <p >
        <EventIcon sx={{ paddingRight: '7px', verticalAlign: 'bottom' }} /> Start Date : {startDate.split('T')[0]}
      </p>
      <p >
        <EventIcon sx={{ paddingRight: '7px', verticalAlign: 'bottom' }} /> End Date : {endDate.split('T')[0]}
      </p>
      <p >
        <AccessTimeIcon sx={{ paddingRight: '7px', verticalAlign: 'bottom' }} /> Time : {duration}
      </p>
      <p >
        <LocationOnOutlinedIcon sx={{ paddingRight: '7px', verticalAlign: 'bottom' }} /> {location}
      </p>
      <a href={'https://calendar.google.com/calendar/u/0/r'} target='_blank' rel="noreferrer"> Add To Calender </a>
    </div>
  </div>;
};
InfoCard.propTypes = {
  eventInfo: PropTypes.object.isRequired,
};
export default InfoCard;
