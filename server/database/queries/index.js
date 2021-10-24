const { getAllOrgs } = require('./organizations');
const { getEventsCategory, getAllEvents, getEventByIdQuery } = require('./events');

module.exports = {
  getAllOrgs,
  getEventsCategory,
  getAllEvents,
  getEventByIdQuery,
};
