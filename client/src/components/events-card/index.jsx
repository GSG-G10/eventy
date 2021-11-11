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
      width: 260, height: 320, margin: '7px', borderRadius: 6, marginBottom: '20px', boxShadow: 'rgba(194, 189, 189, 0.35) 0px 5px 8px',
    }}>
      <CardActionArea
        sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px', height: '100%', width: '100%' }}
        onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
        <div className="price-container">{event.price === 0 ? 'Free' : `${event.price}$`}</div>
        <CardMedia
          component="img"
          height="130"
          width='200'
          image={event.image}
          alt="green iguana"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="p" component="div" >
            <Typography sx={{ color: '#024059' }} onClick={() => history.push(`/event/${event.id}/${event.name}`)}>
              {event.name}</Typography>
          </Typography>
          <div style={{ marginTop: '0' }}>
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
