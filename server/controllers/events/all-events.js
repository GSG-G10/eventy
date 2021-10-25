const getEventsByCategory = require('./get-events-category');
const { getAllEvents } = require('../../database/queries');
const getDate = require('../../utils/get-date');

module.exports = async (req, res, next) => {
  try {
    if (req.query.category) {
      return getEventsByCategory(req, res, next);
    }
    const { date } = getDate();
    const {
      rows: data,
    } = await getAllEvents(date);
    if (!data.length > 0) {
      return res.json({ status: 204, message: 'No Data Found' });
    }
    return res.json({
      status: 200,
      message: 'Events imported successfully',
      data,
    });
  } catch (error) {
    return next(error);
  }
};
