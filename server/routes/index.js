const router = require('express').Router();
const {
  signup,
  events,
  getEvent,
  error404,
  login,
  deleteEvent,
  updateEvent,
  serverError,
  organizations,
  getOrganization,
} = require('../controllers');

const {
  setCookies,
  checkIsSignedIn,
} = require('../middlewares');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.put('/events/:id', checkIsSignedIn, updateEvent);
router.delete('/events/:id', checkIsSignedIn, deleteEvent);

router.post('/login', login, setCookies);
router.post('/signup', signup, setCookies);

router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);

router.use(error404);
router.use(serverError);
module.exports = router;
