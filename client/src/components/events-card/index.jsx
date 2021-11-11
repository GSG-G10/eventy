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
import './style.css';

const EventsCard = ({ event }) => {
  const history = useHistory();
  return (
    <Card sx={{
      width: 260, height: 300, borderRadius: 6, marginBottom: '20px', boxShadow: 'rgba(194, 189, 189, 0.35) 0px 5px 8px',
    }}>
      <CardActionArea sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px' }}onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
        <div className="price-container">{`$${event.price}`}</div>
        <CardMedia
          component="img"
          height="140"
          width='200'
          image={event.image}
          alt="green iguana"
        ></CardMedia>
        <CardContent style={{ padding: '0%' }}>
          <Typography gutterBottom variant="p" component="div" >
            <Typography onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
              {event.name}</Typography>
          </Typography>
          <div style={{ marginTop: '-6%' }}>
            <Typography variant="body2" fontSize='15px' >
              <Typography component="div">
                <GroupOutlinedIcon sx={{ color: '#D97904', fontSize: '22px' }} /> <span>{event.organizer}</span>
              </Typography>
              <Typography component="div">
                <Typography component="div" sx={{ width: '90%' }}>
                  <DateRangeIcon sx={{ color: '#D97904', fontSize: '20px' }} />
                  <span>{event.start_date.split('T')[0]}</span>
                </Typography>
              </Typography>
              <Typography component="div">
                <Typography component="div" sx={{ width: '91%' }}>
                  <LocationOnIcon sx={{ color: '#D97904', fontSize: '22px' }} />
                  <span>{event.location}</span>
                </Typography>
              </Typography>
            </Typography>
          </div>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};
EventsCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventsCard;
