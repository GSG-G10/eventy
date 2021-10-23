const router = require('express').Router();
const { events } = require('../controllers/events');

router.get('/events', events);

module.exports = router;
