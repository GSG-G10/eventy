const router = require('express').Router();
const { organizations } = require('../controllers/organizations');
const { events } = require('../controllers/events');

router.get('/events', events);
router.get('/organizations', organizations);

module.exports = router;
