const router = require('express').Router();

const { events, getEvent } = require('../controllers/events');
const { organizations, getOrganization } = require('../controllers/organizations');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);

module.exports = router;
