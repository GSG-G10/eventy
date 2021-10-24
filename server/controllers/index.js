const {
  organizations,
  getOrganization,
} = require('./organizations');

const {
  events,
  getEvent,
  deleteEvent,
  getEventsByCategory,
} = require('./events');

const signup = require('./auth/sign-up');

const {
  error404,
  serverError,
} = require('./errors');

module.exports = {
  getEventsByCategory,
  getOrganization,
  organizations,
  serverError,
  deleteEvent,
  getEvent,
  error404,
  events,
  signup,
};
