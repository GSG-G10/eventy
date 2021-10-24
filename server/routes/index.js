const router = require('express').Router();
const {
  organizations,
  getOrganization,
  events,
  getEvent,
  serverError,
  error404,
  signup,
} = require('../controllers');

const {
  setCookies,
} = require('../middlewares');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.post('/signup', signup, setCookies);
router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);
router.use(error404);
router.use(serverError);

module.exports = router;
