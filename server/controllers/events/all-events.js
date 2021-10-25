const getEventsByCategory = require('./get-events-category');
const { getOrganizationEvents } = require('../organizations');
const { getAllEvents } = require('../../database/queries');
const getTopEvent = require('./get-events-type');
const getDate = require('../../utils/get-date');

module.exports = async (req, res, next) => {
  try {
    if (req.query.category) {
      return getEventsByCategory(req, res, next);
    }
    if (req.query.type) {
      return getTopEvent(req, res, next);
    }
    if (req.query.organization) {
      return getOrganizationEvents(req, res, next);
    }
    const { date } = getDate();
    const {
      rows: data,
    } = await getAllEvents(date);

    return res.json({
      status: 200,
      message: 'Events imported successfully',
      data,
    });
  } catch (error) {
    return next(error);
  }
};
