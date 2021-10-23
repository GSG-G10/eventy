const router = require('express').Router();
const { getEventsByCategory } = require('../controllers/events');
const { events } = require('../controllers/events');

router.get('/events', getEventsByCategory);

router.get('/events', events);

module.exports = router;
