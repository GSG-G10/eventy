import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useHistory } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import './style.css';

const EventsCard = ({ event }) => {
  const history = useHistory();
  return (
    <Card sx={{
      width: 300, height: 370, borderRadius: 5, marginBottom: '20px',
    }}>
      <CardActionArea onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
        <div className="price-container">{`${event.price}$`}</div>
        <CardMedia
          component="img"
          height="140"
          width='200'
          image={event.image}
          alt="green iguana"
        ></CardMedia>
        <CardContent>
          <Typography onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
            {event.name}
          </Typography>
          <Typography variant="body2" fontSize='15px' sx={
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '15vh',
              alignItems: 'stretch',
            }
          }>
            <Typography component="div" sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
              <GroupOutlinedIcon fontSize='15px' /> <span>{event.organizer}</span>
            </Typography>
            <Typography component="div" sx={{
              display: 'flex', width: '90%', justifyContent: 'space-around', alignItems: 'center',
            }}>
              <Typography component="div" sx={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <DateRangeIcon fontSize='15px' />
                <span>{event.start_date.split('T')[0]}</span>
              </Typography>
              <Typography component="div" sx={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <AccessTimeIcon fontSize='15px' />
                <span > {event.duration} </span>
              </Typography>

            </Typography>
            <Typography component="div" sx={{
              display: 'flex', width: '90%', justifyContent: 'space-around', alignItems: 'center',
            }}>
              <Typography component="div" sx={{
                width: '60%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <LocationOnIcon fontSize='15px' />
                <span>{event.location}</span>
              </Typography>
              <Typography component="div" sx={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <PeopleIcon fontSize='15px' />
                <span>{event.attendance}</span>
              </Typography>
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
EventsCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventsCard;
