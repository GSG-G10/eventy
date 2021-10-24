const router = require('express').Router();
const { getOrgs, getOrganization } = require('../controllers/organizations');
const { getEventsByCategory, events } = require('../controllers/events');

router.get('/organizations/:id', getOrganization);
router.get('/organizations', getOrgs);

router.get('/events', getEventsByCategory);

router.get('/events', events);

module.exports = router;
