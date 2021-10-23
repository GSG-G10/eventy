const router = require('express').Router();

const { events, getEvent, getEventsByCategory} = require('../controllers/events');

router.get('/events/:id',getEvent);

router.get('/events', getEventsByCategory);

router.get('/events', events);

module.exports = router;
