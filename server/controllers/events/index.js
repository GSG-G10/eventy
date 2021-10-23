const events = require("./all-events");
const getEvent = require("./get-event");
const getEventsByCategory = require('./get-events-category');

module.exports = {
  getEventsByCategory,
  events,
  getEvent,
};
