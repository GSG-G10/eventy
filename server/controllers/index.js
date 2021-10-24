const { organizations, getOrganization } = require('./organizations');
const { getEventsByCategory, getEvent, events } = require('./events');
const { error404, serverError } = require('./errors');

module.exports = {
  organizations,
  getEventsByCategory,
  getOrganization,
  error404,
  serverError,
  getEvent,
  events,
};
