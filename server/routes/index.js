const router = require('express').Router();
const { getEventsByCategory } = require('../controllers');

router.get('/events', getEventsByCategory);

module.exports = router;
