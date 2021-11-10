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

import styles from './styles';
import './style.css';

const EventsCard = ({ event }) => {
  const history = useHistory();
  return (
    <Card className="eventCard" sx={styles.card}>
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
          <Typography variant="body2" fontSize='15px' sx={styles.infoContainer}>
            <Typography component="div" sx={{ ...styles.singleElement, width: '50%' }}>
              <GroupOutlinedIcon fontSize='15px' /> <span>{event.organizer}</span>
            </Typography>
            <Typography component="div" sx={styles.doubleElements}>
              <Typography component="div" sx={{ ...styles.singleElement, width: '50%' }}>
                <DateRangeIcon fontSize='15px' />
                <span>{event.start_date.split('T')[0]}</span>
              </Typography>
              <Typography component="div" sx={{ ...styles.singleElement, width: '50%' }}>
                <AccessTimeIcon fontSize='15px' />
                <span > {event.duration} </span>
              </Typography>

            </Typography>
            <Typography component="div" sx={styles.doubleElements}>
              <Typography component="div" sx={{ ...styles.singleElement, width: '80%' }}>
                <LocationOnIcon fontSize='15px' />
                <span>{event.location}</span>
              </Typography>
              <Typography component="div" sx={{ ...styles.singleElement, width: '20%' }}>
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
