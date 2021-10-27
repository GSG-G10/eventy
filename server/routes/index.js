const router = require('express').Router();
const {
  login,
  signup,
  events,
  signout,
  error404,
  getEvent,
  deleteEvent,
  updateEvent,
  serverError,
  organizations,
  getOrganization,
  createEvent,
} = require('../controllers');

const {
  setCookies,
  checkIsSignedIn,
} = require('../middlewares');

router.get('/events', events);
router.get('/events/:id', getEvent);
router.post('/events', checkIsSignedIn, createEvent);
router.put('/events/:id', checkIsSignedIn, updateEvent);
router.delete('/events/:id', checkIsSignedIn, deleteEvent);

router.post('/login', login, setCookies);
router.post('/signup', signup, setCookies);
router.get('/signout', checkIsSignedIn, signout);

router.get('/organizations', organizations);
router.get('/organizations/:id', getOrganization);

router.use(error404);
router.use(serverError);
module.exports = router;
