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

const { login, signup } = require('./auth');

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
  login,
  signup,
};
