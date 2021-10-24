const router = require('express').Router();
const {
  getOrgs,
  getOrganization,
  getEventsByCategory,
  events,
  getEvent,
  serverError,
  error404,
} = require('../controllers');

router.get('/organizations/:id', getOrganization);
router.get('/organizations', getOrgs);
router.get('/events/:id', getEvent);
router.get('/events', getEventsByCategory);
router.get('/events', events);
router.use(error404);
router.use(serverError);

module.exports = router;
