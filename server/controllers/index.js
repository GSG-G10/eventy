const {
  organizations,
  getOrganization,
} = require('./organizations');

const {
  events,
  getEvent,
  createEvent,
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
  createEvent,
  getEvent,
  error404,
  events,
  login,
  signup,
};
