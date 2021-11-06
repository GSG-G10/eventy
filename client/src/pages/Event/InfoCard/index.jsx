import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const InfoCard = ({ eventInfo }) => {
  const {
    start_date: startDate, expire_date: endDate, location, duration, attendance,
  } = eventInfo;

  return <div className="info-card">
    <h2>
        Event Information
    </h2>
    <div style={{
      display: 'flex', flexDirection: 'column', width: '87%', height: '75%', justifyContent: 'space-between', alignItems: 'baseline',
    }}>
      <p style={{
        display: 'flex', width: '85%', alignItems: 'center', justifyContent: 'space-between',
      }} >
        <EventIcon /> Start Date : {startDate.split('T')[0]}
      </p>
      <p style={{
        display: 'flex', width: '82%', alignItems: 'center', justifyContent: 'space-between',
      }} >
        <EventIcon /> End Date : {endDate.split('T')[0]}
      </p>
      <p style={{
        display: 'flex', width: '62%', alignItems: 'center', justifyContent: 'space-between',
      }} >
        <AccessTimeIcon /> Time : {duration}
      </p>
      <p style={{
        display: 'flex', width: '86%', alignItems: 'center', justifyContent: 'space-between',
      }} >
        <LocationOnOutlinedIcon /> location : {location}
      </p>
      <p style={{
        display: 'flex', width: '65%', alignItems: 'center', justifyContent: 'space-between',
      }} >
        <PeopleIcon /> Attendance : {attendance}
      </p>
      <a style={{ marginLeft: '2.5rem' }} href={'https://calendar.google.com/calendar/u/0/r'} target='_blank' rel="noreferrer"> Add To Calender </a>
    </div>
  </div>;
};
InfoCard.propTypes = {
  eventInfo: PropTypes.object.isRequired,
};
export default InfoCard;
