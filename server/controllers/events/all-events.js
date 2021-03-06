const getDate = require('../../utils/get-date');
const getEventByType = require('./get-events-type');
const { getAllEvents } = require('../../database/queries');
const getEventsByCategory = require('./get-events-category');
const { getOrganizationEvents } = require('../organizations');

module.exports = async (req, res, next) => {
  try {
    if (req.query.category) {
      return getEventsByCategory(req, res, next);
    }
    if (req.query.type) {
      return getEventByType(req, res, next);
    }
    if (req.query.organization) {
      return getOrganizationEvents(req, res, next);
    }
    const { date } = getDate();
    const events = await getAllEvents(date);

    if (!events?.length) {
      return res.json({ message: 'No events founded' });
    }

    return res.json(events);
  } catch (error) {
    return next(error);
  }
};
