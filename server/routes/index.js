const router = require('express').Router();

const { events, getEvent} = require('../controllers/events');

router.get('/events/:id',getEvent);
router.get('/events', events);

module.exports = router;
