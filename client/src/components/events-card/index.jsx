import propTypes from 'prop-types';
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
<<<<<<< HEAD
=======
import { useHistory } from 'react-router-dom';
>>>>>>> f3245fb58cb806e49acacb94a647415057681142
import './style.css';

const EventsCard = ({ event }) => {
  const history = useHistory();
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 400 }}>
      <CardActionArea>
        <div className="price-container">{`${event.price}$`}</div>
        <CardMedia
          component="img"
          height="140"
          width='200'
          image={event.image}
          alt="green iguana"
          onClick={() => history.push(`/event/${event.id}/${event.name}`)}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
          Event Name:
            <Typography>{event.name}</Typography>
          </Typography>

          <Typography variant="body2">
            <Typography component="div">
              <GroupOutlinedIcon /> <span>{event.organizer}</span>
            </Typography>
            <Typography component="div">
              <DateRangeIcon /> <span>{event.start_date.split('T')[0]}</span>
              <span>{event.duration}</span>
            </Typography>
            <Typography component="div">
              <LocationOnIcon />
              <span>{event.location}</span>
            </Typography>
          </Typography>
<<<<<<< HEAD
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
EventsCard.propTypes = {
  event: propTypes.object.isRequired,
=======
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
EventsCard.propTypes = {
  event: PropTypes.object.isRequired,
>>>>>>> f3245fb58cb806e49acacb94a647415057681142
};

export default EventsCard;
