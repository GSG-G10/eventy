const {
  organizations,
  getOrganization,
} = require('./organizations');

const {
  events,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventsByCategory,
} = require('./events');

const {
  login,
  signup,
  signout,
} = require('./auth');

const {
  error404,
  serverError,
} = require('./errors');

module.exports = {
  getEventsByCategory,
  getOrganization,
  organizations,
  updateEvent,
  deleteEvent,
  serverError,
  error404,
  getEvent,
  signout,
  signup,
  events,
  login,
};
