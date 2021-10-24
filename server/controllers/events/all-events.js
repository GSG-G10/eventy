const getEventsByCategory = require('./get-events-category');
const { getAllEvents } = require('../../database/queries');
const getDate = require('../../utils/get-date');

module.exports = async (req, res, next) => {
  if (req.query.category) {
    return getEventsByCategory(req, res, next);
  }
  const { date } = getDate();
  try {
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
