import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';
import {
  LocationOnIcon,
  GroupOutlinedIcon,
  DateRangeIcon,
} from '@mui/icons-material';
import './style.css';

const EventsCard = ({ event }) => (
  <Card sx={{ maxWidth: 300, maxHeight: 400 }}>
    <CardActionArea>
      <div className="price-container">$20.00</div>
      <CardMedia
        component="img"
        height="140"
        image={event.image}
        alt="green iguana"
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
            <DateRangeIcon /> <span>{event.start_date}</span>
            <span>{event.duration}</span>
          </Typography>
          <Typography component="div">
            <LocationOnIcon />
            <span>{event.location}</span>
          </Typography>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default EventsCard;
