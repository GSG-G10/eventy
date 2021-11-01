import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './style.css';

const EventsCard = ({event}) => (
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
