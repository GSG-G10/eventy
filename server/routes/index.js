const router = require('express').Router();
const {
  organizations,
  getOrganization,
  events,
  getEvent,
  serverError,
  error404,
  deleteEvent,
} = require('../controllers');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.delete('/events/:id', deleteEvent);
router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);
router.use(error404);
router.use(serverError);

module.exports = router;
