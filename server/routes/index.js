const router = require('express').Router();
const {
  signup,
  events,
  getEvent,
  error404,
  login,
  deleteEvent,
  serverError,
  organizations,
  getOrganization,
} = require('../controllers');

const {
  setCookies,
} = require('../middlewares');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.delete('/events/:id', deleteEvent);

router.post('/signup', signup, setCookies);

router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);
router.post('/login', login, setCookies);

router.use(error404);
router.use(serverError);
module.exports = router;
