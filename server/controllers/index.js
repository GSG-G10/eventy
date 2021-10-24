const { getOrgs, getOrganization } = require('./organizations');
const { getEventsByCategory, deleteEvent } = require('./events');

module.exports = {
  getOrgs,
  getEventsByCategory,
  getOrganization,
  deleteEvent,
};
